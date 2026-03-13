import "./DashboardLayout.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import GraphArea from "../components/GraphArea";
import ChatPanel from "../components/ChatPanel";

export default function DashboardLayout() {
  return (
    <div className="dashboard">

      <aside className="sidebar">
        <Sidebar />
      </aside>

      <main className="center">
        <Header />
        <GraphArea />
      </main>

      <section className="chat">
       <ChatPanel/>
      </section>

    </div>
  );
}