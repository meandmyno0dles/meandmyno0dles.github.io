import pygame
import sys
import os
import random
import numpy as np
from collections import deque

# Initialize Pygame
pygame.init()

# Constants
WIDTH, HEIGHT = 800, 600
FPS = 60
BALL_SPEED = 4
BEAM_SPEED = 10
BEAM_WIDTH = 4

# Grid resolution for flood-fill
GRID_WIDTH = 200
GRID_HEIGHT = 150
CELL_WIDTH = WIDTH // GRID_WIDTH
CELL_HEIGHT = HEIGHT // GRID_HEIGHT

# Colors
BLACK = (0, 0, 0)
BLUE = (0, 191, 255)
WHITE = (255, 255, 255)
RED = (255, 0, 0)
GREEN = (0, 255, 0)

# Setup display
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("DragonBall JezzBall")
clock = pygame.time.Clock()

# Load assets
ASSET_PATH = "assets"

def load_image(name):
    return pygame.image.load(os.path.join(ASSET_PATH, name)).convert_alpha()

BALL_IMAGES = [load_image(f"dball{i+1}.png") for i in range(7)]
GOKU_IMAGES = [load_image(f"goku{i+1}.png") for i in range(3)]

# Classes
class Ball:
    def __init__(self, image):
        self.image = image
        self.rect = self.image.get_rect(center=(random.randint(100, WIDTH - 100), random.randint(100, HEIGHT - 100)))
        self.vx = random.choice([-BALL_SPEED, BALL_SPEED])
        self.vy = random.choice([-BALL_SPEED, BALL_SPEED])

    def move(self):
        next_rect = self.rect.move(self.vx, self.vy)

        if next_rect.left <= 0 or next_rect.right >= WIDTH:
            self.vx *= -1
        if next_rect.top <= 0 or next_rect.bottom >= HEIGHT:
            self.vy *= -1

        for wall in walls:
            for wall_rect in wall:
                if next_rect.colliderect(wall_rect):
                    if wall_rect.width > wall_rect.height:
                        self.vy *= -1
                    else:
                        self.vx *= -1
                    return

        self.rect = next_rect

    def draw(self, surface):
        surface.blit(self.image, self.rect)

class Beam:
    def __init__(self, x, y, direction):
        self.x = x
        self.y = y
        self.direction = direction  # "horizontal" or "vertical"
        self.length_pos = 0  # Forward direction
        self.length_neg = 0  # Backward direction
        self.active = True
        self.failed = False
        self.success = False

    def update(self, balls):
        if not self.active:
            return

        stop_pos = False
        stop_neg = False

        # Grow beam in both directions, unless blocked
        if self.direction == "horizontal":
            if not stop_pos:
                new_rect = pygame.Rect(self.x, self.y, self.length_pos + BEAM_SPEED, BEAM_WIDTH)
                if self._collides_with_wall(new_rect):
                    stop_pos = True
                else:
                    self.length_pos += BEAM_SPEED

            if not stop_neg:
                new_rect = pygame.Rect(self.x - self.length_neg - BEAM_SPEED, self.y, self.length_neg + BEAM_SPEED, BEAM_WIDTH)
                if self._collides_with_wall(new_rect):
                    stop_neg = True
                else:
                    self.length_neg += BEAM_SPEED

        else:  # vertical
            if not stop_pos:
                new_rect = pygame.Rect(self.x, self.y, BEAM_WIDTH, self.length_pos + BEAM_SPEED)
                new_rect.top = self.y
                if self._collides_with_wall(new_rect):
                    stop_pos = True
                else:
                    self.length_pos += BEAM_SPEED

            if not stop_neg:
                new_rect = pygame.Rect(self.x, self.y - self.length_neg - BEAM_SPEED, BEAM_WIDTH, self.length_neg + BEAM_SPEED)
                if self._collides_with_wall(new_rect):
                    stop_neg = True
                else:
                    self.length_neg += BEAM_SPEED

        # Check for ball collision
        for ball in balls:
            for rect in self.get_beam_rects():
                if ball.rect.colliderect(rect.inflate(10, 10)):
                    self.failed = True
                    self.active = False
                    return

        # Completion check: if both directions stopped or hit wall/edge
        if self.direction == "horizontal":
            if (self.x + self.length_pos >= WIDTH or stop_pos) and (self.x - self.length_neg <= 0 or stop_neg):
                self.success = True
                self.active = False
        else:
            if (self.y + self.length_pos >= HEIGHT or stop_pos) and (self.y - self.length_neg <= 0 or stop_neg):
                self.success = True
                self.active = False

    def _collides_with_wall(self, rect):
        for wall in walls:
            for wall_rect in wall:
                if rect.colliderect(wall_rect):
                    return True
        return False

    def get_beam_rects(self):
        if self.direction == "horizontal":
            left = pygame.Rect(self.x - self.length_neg, self.y, self.length_neg, BEAM_WIDTH)
            right = pygame.Rect(self.x, self.y, self.length_pos, BEAM_WIDTH)
            return [left, right]
        else:
            up = pygame.Rect(self.x, self.y - self.length_neg, BEAM_WIDTH, self.length_neg)
            down = pygame.Rect(self.x, self.y, BEAM_WIDTH, self.length_pos)
            return [up, down]

    def draw(self, surface):
        for rect in self.get_beam_rects():
            pygame.draw.rect(surface, BLUE, rect)


class Goku:
    def __init__(self, image, x, y):
        self.image = image
        self.rect = self.image.get_rect(midright=(x, y))

    def draw(self, surface):
        surface.blit(self.image, self.rect)

def check_win(balls, walls, win_threshold=0.75):
    grid = np.zeros((GRID_HEIGHT, GRID_WIDTH), dtype=bool)
    wall_mask = np.zeros((GRID_HEIGHT, GRID_WIDTH), dtype=bool)
    for wall in walls:
        for rect in wall:
            x_start = max(0, rect.left // CELL_WIDTH)
            x_end = min(GRID_WIDTH, rect.right // CELL_WIDTH + 1)
            y_start = max(0, rect.top // CELL_HEIGHT)
            y_end = min(GRID_HEIGHT, rect.bottom // CELL_HEIGHT + 1)
            wall_mask[y_start:y_end, x_start:x_end] = True

    visited = np.zeros_like(grid)
    for ball in balls:
        bx = ball.rect.centerx // CELL_WIDTH
        by = ball.rect.centery // CELL_HEIGHT
        if visited[by, bx] or wall_mask[by, bx]:
            continue
        queue = deque()
        queue.append((by, bx))
        visited[by, bx] = True
        while queue:
            y, x = queue.popleft()
            for dy, dx in [(-1,0), (1,0), (0,-1), (0,1)]:
                ny, nx = y + dy, x + dx
                if 0 <= ny < GRID_HEIGHT and 0 <= nx < GRID_WIDTH:
                    if not visited[ny, nx] and not wall_mask[ny, nx]:
                        visited[ny, nx] = True
                        queue.append((ny, nx))

    reachable_area = np.sum(visited)
    total_area = GRID_WIDTH * GRID_HEIGHT
    unreachable_area = total_area - reachable_area
    percentage_cleared = unreachable_area / total_area

    return percentage_cleared >= win_threshold, percentage_cleared

# Game State
level = 1
balls = [Ball(BALL_IMAGES[0])]
walls = []
active_beam = None
active_goku = None
selected_goku_index = 0
beam_failed = False # Track beam interruption state

# Game Loop
running = True
while running:
    clock.tick(FPS)
    screen.fill(BLACK)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.MOUSEBUTTONDOWN and not active_beam:
            mx, my = pygame.mouse.get_pos()
            if event.button == 1:  # Left click = vertical
                direction = "vertical"
            elif event.button == 3:  # Right click = horizontal
                direction = "horizontal"
            else:
                continue  # Ignore other mouse buttons

            active_beam = Beam(mx, my, direction)
            active_goku = Goku(GOKU_IMAGES[selected_goku_index], mx, my)

        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE and beam_failed:
                # Reset after beam failure
                beam_failed = False
                active_beam = None
                active_goku = None

    for ball in balls:
        ball.move()
        ball.draw(screen)

    if active_beam:
        active_beam.update(balls)
        active_beam.draw(screen)

        if active_beam.success:
            walls.append(active_beam.get_beam_rects())
            won, percent = check_win(balls, walls)
            if won:
                font = pygame.font.SysFont(None, 48)
                win_msg = font.render("Victory! Press R to continue.", True, GREEN)
                screen.blit(win_msg, (WIDTH // 2 - 200, HEIGHT // 2))
                pygame.display.flip()
                waiting = True
                while waiting:
                    for event in pygame.event.get():
                        if event.type == pygame.QUIT:
                            pygame.quit()
                            sys.exit()
                        elif event.type == pygame.KEYDOWN and event.key == pygame.K_r:
                            level += 1
                            balls.clear()
                            walls.clear()
                            for i in range(level):
                                balls.append(Ball(BALL_IMAGES[i % 7]))
                            active_beam = None
                            active_goku = None
                            waiting = False
            else:
                active_beam = None
                active_goku = None

        elif active_beam.failed:
            font = pygame.font.SysFont(None, 48)
            msg = font.render("Beam Interrupted! Press SPACE to retry.", True, RED)
            screen.blit(msg, (WIDTH // 2 - 200, HEIGHT // 2))
            beam_failed = True
            active_goku = None
            active_beam = None

    for wall in walls:
        for rect in wall:
            if isinstance(rect, pygame.Rect):
                pygame.draw.rect(screen, BLUE, rect)

    if active_goku:
        active_goku.draw(screen)

    font = pygame.font.SysFont(None, 36)
    text = font.render(f"Level {level} - Goku {selected_goku_index + 1}", True, WHITE)
    screen.blit(text, (10, 10))

    pygame.display.flip()

pygame.quit()
sys.exit()