import Image from "next/image";
import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
import PostTable from "@/components/posts/PostTable";

export default function Home() {
  return (
  <>
    <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
      <DashboardCard title='Post' count={101} icon={<Newspaper className="text-slate-500" size={72}/>}/>
      <DashboardCard title='Categories' count={11} icon={<Folder className="text-slate-500" size={72}/>}/>
      <DashboardCard title='Users' count={803} icon={<User className="text-slate-500" size={72}/>}/>
      <DashboardCard title='Comments' count={2993} icon={<MessageCircle className="text-slate-500" size={72}/>}/>
    </div>
    <PostTable limit={5}/>
  </>
  );
}
