import {
  Users,
  ShieldCheck,
  Globe2,
  Sparkles,
  Trophy,
  MonitorPlay,
  FlaskConical,
  Library,
  Bus,
  HeartPulse,
  Flower2,
  Scale,
  Award,
  Cctv,
  Activity,
  Music,
  Music2,
  Palette,
  Cpu,
  Mic,
  Leaf,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Users,
  ShieldCheck,
  Globe2,
  Sparkles,
  Trophy,
  MonitorPlay,
  FlaskConical,
  Library,
  Bus,
  HeartPulse,
  Flower2,
  Scale,
  Award,
  Cctv,
  Activity,
  Music,
  Music2,
  Palette,
  Cpu,
  Mic,
  Leaf,
};

interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className }: IconProps) {
  const Cmp = iconMap[name] ?? Sparkles;
  return <Cmp className={className} />;
}
