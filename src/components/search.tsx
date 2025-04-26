"use client";
import React from "react";
import { Input } from "@/components/ui";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export const Search: React.FC<Props> = (props) => {
  const { className, placeholder, value, onChange } = props;
  return (
    <label
      className={cn(
        "flex items-center gap-1 bg-gray-100 rounded-2xl px-2",
        className
      )}
    >
      <SearchIcon size={16} className="text-gray-400" />
      <Input
        className="border-0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
};
