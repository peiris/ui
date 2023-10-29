import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/bento-kit.png" alt="@bento-kit" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
