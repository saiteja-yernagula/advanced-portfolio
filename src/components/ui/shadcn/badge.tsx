import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-mono font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-slate-800 text-slate-100 hover:bg-slate-700",
        cyber:
          "border-cyan-500/40 bg-[#0c1222]/90 text-cyan-300 shadow-neon-cyan backdrop-blur-md",
        purple:
          "border-purple-500/40 bg-purple-950/60 text-purple-300 shadow-neon-purple backdrop-blur-md",
        emerald:
          "border-emerald-500/40 bg-emerald-950/60 text-emerald-300 shadow-neon-green backdrop-blur-md",
        amber:
          "border-amber-500/40 bg-amber-950/60 text-amber-300 shadow-sm backdrop-blur-md",
        outline:
          "border-slate-700 text-slate-300 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
