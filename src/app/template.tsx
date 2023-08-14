'use client'
import Image from "next/image"
import { usePathname } from 'next/navigation'
import Link from "next/link"

import ProfilePicture from "@src/assets/profile_picture.png"

import AppIcon from "@src/assets/AppsIcon"
import BillingIcon from "@src/assets/BillingIcon"
import GeneralIcon from "@src/assets/GeneralIcon"
import InvitationsIcon from "@src/assets/InvitationsIcon"
import PasswordIcon from "@src/assets/PasswordIcon"
import LogOutIcon from "@src/assets/LogOutIcon"

export default function Template({ children } : { children: React.ReactNode}) {
  const pathname = usePathname()

  return (
    <>
      <div className={"ml-[15%] my-[5rem] bg-new_orange min-h-calc10 w-[20%] max-w-[276px] rounded-3xl absolute"}>
      </div>
      <main className={"min-h-calc15 min-w-calc bg-white mx-[18%] my-[7.5rem] absolute rounded-3xl"} >
        <nav className={"h-full w-[25%] max-w-[260px] bg-gray_light absolute rounded-l-3xl body-font font-poppins flex flex-col"}>
          <div className="px-6 pt-11 grid grid-cols-3 gap-1">
            <Image src={ProfilePicture} alt="profile picture" className={"w-full rounded-3xl col-span-1 p-2"} />
            <div className={"col-span-2 flex flex-col justify-center"}>
              <h1 className={"text-base font-bold tracking-tight"}>Ildiko Gaspar</h1>
              <h2 className={"text-sm font-normal tracking-tighter text-style"}>
                @igaspar
              </h2>
            </div>
          </div>
          <ul className="pl-2 pt-10 text-style flex flex-col items-stretch gap-2 text-sm font-normal tracking-tighter">
            {
              pathname === "/" ?
                <li className={"text-purple_dark flex h-9"}>
                  <span className="bg-new_orange rounded-3xl h-full w-1.5"></span>
                  <Link className="flex w-full items-center gap-2 pl-2.5" href={"/"} >
                    <GeneralIcon className="stroke-purple_dark w-7 h-7"/>
                    General
                  </Link>
                </li>
                :
                <li className="h-9 flex hover:font-bold hover:text-sm group">
                  <Link href={"/"} className="flex w-full items-center gap-2 pl-4">
                    <GeneralIcon className="stroke-style w-7 h-7 group-hover:stroke-purple_dark group-hover:w-8 group-hover:h-8"/>
                    General
                  </Link>
                </li>
            }
            {
              pathname === "/password" ?
                <li className={"text-purple_dark flex h-9"}>
                  <span className="bg-new_orange rounded-3xl h-full w-1.5"></span>
                  <Link href={"/password"} className="flex w-full items-center gap-2 pl-2.5">
                    <PasswordIcon className="stroke-purple_dark w-7 h-7"/>
                    Password
                  </Link>
                </li>
                :
                <li className="h-9 flex hover:font-bold hover:text-sm group">
                  <Link href={"/password"} className="flex w-full items-center gap-2 pl-4">
                    <PasswordIcon className="stroke-style w-7 h-7 group-hover:stroke-purple_dark group-hover:w-8 group-hover:h-8" />
                    Password
                  </Link>
                </li>
            }
            {
              pathname === "/invitations" ?
                <li className={"text-purple_dark flex h-9"}>
                  <span className="bg-new_orange rounded-3xl h-full w-1.5"></span>
                  <Link href={"/invitations"} className="flex w-full items-center gap-2 pl-2.5">
                    <InvitationsIcon className="stroke-purple_dark w-7 h-7"/>
                    Invitations
                  </Link>
                </li>
                :
                <li className="h-9 flex hover:font-bold hover:text-sm group">
                  <Link href={"/invitations"}  className="flex w-full items-center gap-2 pl-4">
                    <InvitationsIcon className="stroke-style w-7 h-7 group-hover:stroke-purple_dark group-hover:w-8 group-hover:h-8"/>
                    Invitations
                  </Link>
                </li>
            }
            {
              pathname === "/billing" ?
                <li className={"text-purple_dark flex h-9"}>
                  <span className="bg-new_orange rounded-3xl w-1.5 h-full"></span>
                  <Link href={"/billing"} className="flex w-full items-center gap-2 pl-2.5">
                    <BillingIcon className="stroke-purple_dark w-7 h-7"/>
                    Billing
                  </Link>
                </li>
                :
                <li className="h-9 flex hover:font-bold hover:text-sm group">
                  <Link href={"/billing"} className="flex w-full items-center gap-2 pl-4">
                    <BillingIcon className="stroke-style w-7 h-7 group-hover:stroke-purple_dark group-hover:w-8 group-hover:h-8"/>
                    Billing
                  </Link>
                </li>
            }
            {
              pathname === "/apps" ?
                <li className={"text-purple_dark flex h-9"}>
                  <span className="bg-new_orange rounded-3xl h-full w-1.5"></span>
                  <Link href={"/apps"} className="flex w-full items-center gap-2 pl-2.5">
                    <AppIcon className="stroke-purple_dark w-7 h-7" />
                    Apps
                  </Link>
                </li>
                :
                <li className="h-9 flex hover:font-bold hover:text-sm group">
                  <Link href={"/apps"} className="flex w-full items-center gap-2 pl-4">
                    <AppIcon className="stroke-style w-7 h-7 group-hover:stroke-purple_dark group-hover:w-8 group-hover:h-8" />
                    Apps
                  </Link>
                </li>
            }
          </ul>
          <div className="text-xs pl-2 h-full flex items-end pb-8 font-normal tracking-tighter">
            <li className="h-9 hover:font-bold hover:text-sm group flex">
              <Link href={"/logout"} className="flex w-full items-center gap-2">
                <LogOutIcon className="stroke-style w-7 h-7 group-hover:stroke-purple_dark group-hover:w-8 group-hover:h-8" />
                log out
              </Link>
            </li>
          </div>
        </nav>
        <section className={"h-full w-calc ml-min"}>
          {children}
        </section>
      </main>
    </>

  )
}
