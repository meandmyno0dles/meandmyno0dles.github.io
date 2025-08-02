import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItemProps {
  item: {
    title: string;
    period: string;
    location: string;
    description: string[];
    color: string;
    side: string;
  };
  index: number;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  const isLeft = item.side === "left";
  const colorClass = item.color === "cyber-green" ? "text-cyber-green border-cyber-green" : "text-cyber-blue border-cyber-blue";
  const bgColorClass = item.color === "cyber-green" ? "bg-cyber-green" : "bg-cyber-blue";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex items-center justify-between mb-12"
    >
      {/* Left side content */}
      <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : ''}`}>
        {isLeft && (
          <Card className={`bg-cyber-slate/30 border ${colorClass}/30 rounded-lg p-6`}>
            <CardContent className="p-0">
              <h3 className={`text-xl font-orbitron ${colorClass.split(' ')[0]} mb-2`}>
                {item.title}
              </h3>
              <p className={`${item.color === "cyber-green" ? 'text-cyber-blue' : 'text-cyber-green'} font-semibold mb-2`}>
                {item.period}
              </p>
              <p className="text-cyber-muted text-sm mb-3">{item.location}</p>
              <ul className="text-sm space-y-1 text-left">
                {item.description.map((desc, i) => (
                  <li key={i}>• {desc}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Center dot */}
      <div className="flex items-center justify-center w-2/12">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
          className={`w-4 h-4 ${bgColorClass} rounded-full border-4 border-cyber-dark`}
        />
      </div>

      {/* Right side content */}
      <div className={`w-5/12 ${!isLeft ? 'pl-8' : ''}`}>
        {!isLeft && (
          <Card className={`bg-cyber-slate/30 border ${colorClass}/30 rounded-lg p-6`}>
            <CardContent className="p-0">
              <h3 className={`text-xl font-orbitron ${colorClass.split(' ')[0]} mb-2`}>
                {item.title}
              </h3>
              <p className={`${item.color === "cyber-green" ? 'text-cyber-blue' : 'text-cyber-green'} font-semibold mb-2`}>
                {item.period}
              </p>
              <p className="text-cyber-muted text-sm mb-3">{item.location}</p>
              <ul className="text-sm space-y-1">
                {item.description.map((desc, i) => (
                  <li key={i}>• {desc}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </motion.div>
  );
}
