"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, LogOut, Home, Settings, User, Bell, Search, Sparkles, Zap, Star } from "lucide-react"
import Link from "next/link"

import { useRouter } from 'next/navigation';

// import "../../../Components/EDITOR/Activities/AddLEGACY"



function page() {
  const [isScrolled, setIsScrolled] = useState(false)

  const router = useRouter();

  // const handleClick1 = () => {
  //   router.push('./SignUp');
  // };

  const gotoAddActivity = () => {
    router.push('/Literary/EDITOR/Activities/ArtJournal');
  }


  const gotohome = () => {
    router.push('/Literary/EDITOR/EditorDashboard');
  }

  const gotoaddnews = () => {
    router.push('/Literary/EDITOR/Activities/ArtNews');
  }
  const gotoadddomain = () => {
    router.push('/Literary/EDITOR/Activities/ArtDomain');
  }

  const gotoaddgallery = () => {
    router.push('/Literary/EDITOR/Activities/ArtGallery');
  }
  const gotoaddheritage = () => {
    router.push('/Literary/EDITOR/Activities/AddHeritage');
  }
  const gotoaddcalendar = () => {
    router.push('/Literary/EDITOR/Activities/Calendar');
  }
  const gotoaddLegacy = () => {
    router.push('/Literary/EDITOR/Activities/AddLEGACY');
  }

//   const gotoabout = () => {
//     // router.push('../../Components/ParticipateInActivity');
//   }






  const logout = () => {
    localStorage.clear()
    router.push('/Literary/Auth/SignIn');
    // window.location.reload();
  }



  return (
    <div>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span style={{cursor : "pointer"}} onClick={() => {gotohome()}} className="text-xl font-bold text-gray-800">BOOSTUP</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                // { name: "Home", icon: Home , id : "Home"},
                { name: "Add Journal", icon: Settings , id : "Add" },
                { name: "Add News", icon: User , id : "News" },
                { name: "Add Domain", icon: Bell , id : "Domain" },
                { name: "Add Gallery", icon: Zap, id: "Gallery" },
                { name: "Add Heritage", icon: Zap, id: "Heritage" },
                { name: "Calendar", icon: Zap, id: "Calendar" },
                { name: "Add Legacy", icon: Zap, id: "Legacy" },
                // { name: "Manage Role", icon: Zap, id: "ManageRole" },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    asChild
                  >
                    <span style={{cursor : "pointer"}} className="flex items-center space-x-2"
                      onClick={() => {
                        if (item.id === "Add") {
                          gotoAddActivity();
                        }
                        if (item.id === "Home") {
                          gotohome();
                        }
                        if (item.id === "Domain") {
                          gotoadddomain();
                        }
                        if (item.id === "News") {
                           gotoaddnews();
                        }
                        if (item.id === "Gallery") {
                           gotoaddgallery();
                        }
                        if (item.id === "Heritage") {
                           gotoaddheritage();
                        }
                        if (item.id === "Calendar") {
                           gotoaddcalendar();
                        }
                        if (item.id === "Legacy") {
                           gotoaddLegacy();
                        }
                      }}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </span>
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="icon" className="text-gray-700 hover:text-blue-600">
                  <Search className="w-4 h-4" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="icon" className="text-gray-700 hover:text-blue-600">
                  <Bell className="w-4 h-4" />
                </Button>
              </motion.div> */}

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={() => { logout() }} className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {[
                    { name: "Home", icon: Home },
                    { name: "Services", icon: Settings },
                    { name: "About", icon: User },
                    { name: "Contact", icon: Bell },
                  ].map((item) => (
                    <Button key={item.name} variant="ghost" className="justify-start text-left" asChild>
                      <Link href="#" className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </Link>
                    </Button>
                  ))}

                  <div className="border-t pt-4 space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Button>
                    <Button onClick={() => { logout() }} className="w-full justify-start bg-gradient-to-r from-blue-600 to-blue-500">
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.nav>
    </div>
  )
}

export default page