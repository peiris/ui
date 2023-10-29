import React from "react"

interface PlaceholderProps extends React.ComponentPropsWithoutRef<"div"> {}

export default function Placeholder({ className }: PlaceholderProps) {
  return <div className={className}>Placeholder 1</div>
}
