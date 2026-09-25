import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-xs font-mono font-bold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-slate-100 hover:bg-slate-800 border border-slate-700",
        neon:
          "bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 text-slate-950 font-black shadow-neon-cyan hover:from-cyan-400 hover:to-blue-500 hover:scale-105",
        glowPurple:
          "bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 text-white font-black shadow-neon-purple hover:from-purple-500 hover:to-pink-500 hover:scale-105",
        glowEmerald:
          "bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-black shadow-neon-green hover:from-emerald-400 hover:to-teal-500 hover:scale-105",
        cyber:
          "bg-[#0e1424] text-cyan-300 border border-cyan-500/40 hover:bg-[#151f38] hover:border-cyan-400 hover:shadow-neon-cyan hover:text-white",
        outline:
          "border border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white",
        ghost:
          "text-slate-400 hover:bg-slate-800/80 hover:text-white",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-[11px]",
        lg: "h-12 rounded-xl px-7 text-sm",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
