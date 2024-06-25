import GridViewIcon from "@mui/icons-material/GridView";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Image from "next/image";
import DocumentIcon from "../../../public/document.svg";
import GroupIcon from "../../../public/group.svg";
import PackageIcon from "../../../public/package.svg";
import ChartIcon from "../../../public/pie.chart.svg";
import PerformlyLogo from "../../../public/Preformly Logo.svg";

const drawerWidth = 80;

export default function AppDrawer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div className="mx-auto mt-8 mb-3">
          <Image
            src={PerformlyLogo}
            alt="Performly Logo"
            width={45}
            height={45}
          />
        </div>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              style={{
                justifyContent: "center",
              }}
            >
              <GridViewIcon
                style={{
                  backgroundColor: "#003FAD",
                  width: "100%",
                  height: "100%",
                  padding: "10px",
                  color: "white",
                  borderRadius: 16,
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                src={ChartIcon.src}
                alt="Chart Icon"
                width={45}
                height={45}
                style={{
                  padding: "10px",
                  color: "#737791",
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                src={DocumentIcon.src}
                alt="Document Icon"
                width={45}
                height={45}
                style={{
                  padding: "10px",
                  color: "#737791",
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                src={GroupIcon.src}
                alt="Document Icon"
                width={45}
                height={45}
                style={{
                  padding: "10px",
                  color: "#737791",
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                src={PackageIcon.src}
                alt="Document Icon"
                width={45}
                height={45}
                style={{
                  padding: "10px",
                  color: "#737791",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default" }}>
        {children}
      </Box>
    </Box>
  );
}
