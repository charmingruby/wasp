import { Button } from '@/components/ui/button'
import { UserButton, auth, clerkClient } from '@clerk/nextjs'
import { Bell, PlusCircle, TabletSmartphone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

async function getUserData() {
  const { userId } = auth()
  if (!userId) {
    return null
  }

  const user = await clerkClient.users.getUser(userId)
  return user
}

export async function Header() {
  const user = await getUserData()

  if (!user) {
    redirect('/')
  }

  const { imageUrl, lastName, firstName } = user

  return (
    <header className="px-8 h-16 flex items-center">
      <div className="flex items-center gap-4">
        <TabletSmartphone className="text-primary w-8 h-8" />
        <div className="text-2xl text-border">/</div>

        <div className="flex items-center gap-2">
          <Image
            src={imageUrl}
            alt="Profile image"
            width={32}
            height={32}
            className="w-6 h-6 rounded-full"
          />

          <div className="font-medium text-sm">
            {firstName} {lastName}
          </div>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-4">
        {/* New request */}
        <Button size="sm" className="gap-2">
          Novo pedido
          <PlusCircle className="w-4 h-4" />
        </Button>

        {/* Home */}
        <Link href="/" prefetch={false}>
          <span className="text-sm text-muted-foreground hover:text-primary hover:underline hover:underline-offset-1 transition-all">
            Início
          </span>
        </Link>

        {/* Notifications */}
        <div className="flex items-center border px-2 py-1 rounded-full gap-2">
          <Bell className="text-muted-foreground h-5 w-5" />
          <div className="bg-primary h-6 w-6 rounded-full flex items-center justify-center">
            <small className="text-primary-foreground">11</small>
          </div>
        </div>

        {/* Separator */}
        <div className="w-px h-8 bg-border" />

        {/* User */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  )
}
