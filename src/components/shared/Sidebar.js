import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { DashboardFilled, ProjectFilled } from '@ant-design/icons';

const Sidebar = () => {
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState("dashboard");
  const location = useLocation();

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname, location]);

  const [sidebarChildren] = useState([
    {
      className: "",
      to: '/dashboard',
      name: "Dashboard",
      icon: <DashboardFilled />,
    },
    {
      className: "",
      to: '/subscribe',
      name: "Subscribe",
      icon: <ProjectFilled />,
    },
  ]);

  return (
    <div className="sp90loi8 h-full m-0">
      <div className="mt-20 pt-16">
        {sidebarChildren.map((item, index) => (
          <div className="mt-3"
          onClick={() => navigate(item.to)}
          >
            <div key={index.toString()} className={`px-5 ${item.className}`}>
              <div className={activePath === item.to ? "sju32js2" : "sju32js1"}>
                <p className="flex justify-between"><span className="pr-3">{item.icon}</span>
                <span className="pt-1">{item.name}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
