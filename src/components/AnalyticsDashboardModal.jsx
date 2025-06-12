// "use client";

// import React from "react";
// import { createPortal } from "react-dom";
// import {
//   BarChart3,
//   TrendingUp,
//   Users,
//   Activity,
//   DollarSign,
// } from "lucide-react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Typography,
//   Box,
//   Grid,
//   IconButton,
//   LinearProgress,
//   Paper,
//   Chip,
//   Button,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// export function AnalyticsDashboardModal({
//   isOpen,
//   onClose,
//   users,
//   clients,
//   candidates,
// }) {
//   const activeUsers = users.filter((u) => u.status === "Active").length;
//   const activeClients = clients.filter((c) => c.status === "Active").length;
//   const totalRevenue = clients.reduce(
//     (sum, client) => sum + client.contractValue,
//     0
//   );

//   const userGrowth = 15.2;
//   const clientGrowth = 8.7;
//   const revenueGrowth = 23.4;

//   const departmentStats = {
//     Administration: users.filter((u) => u.department === "Administration")
//       .length,
//     Sales: users.filter((u) => u.department === "Sales").length,
//     Recruitment: users.filter((u) => u.department === "Recruitment").length,
//     "Account Management": users.filter(
//       (u) => u.department === "Account Management"
//     ).length,
//     Operations: users.filter((u) => u.department === "Operations").length,
//   };

//   const industryStats = clients.reduce((acc, client) => {
//     acc[client.industry] = (acc[client.industry] || 0) + 1;
//     return acc;
//   }, {});

//   const metrics = [
//     {
//       title: "Total Users",
//       value: users.length,
//       icon: <Users size={16} />,
//       growth: userGrowth,
//     },
//     {
//       title: "Active Clients",
//       value: activeClients,
//       icon: <Activity size={16} />,
//       growth: clientGrowth,
//     },
//     {
//       title: "Total Revenue",
//       value: `$${totalRevenue.toLocaleString()}`,
//       icon: <DollarSign size={16} />,
//       growth: revenueGrowth,
//     },
//     {
//       title: "Candidates",
//       value: candidates.length,
//       icon: <Users size={16} />,
//       growth: 12.3,
//     },
//   ];

//   return createPortal(
//     <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="lg">
//       <DialogTitle sx={{ pb: 0 }}>
//         <Box display="flex" alignItems="center" justifyContent="space-between">
//           <Box display="flex" alignItems="center" gap={1}>
//             <BarChart3 size={20} />
//             <Typography variant="h6" fontWeight={600}>
//               Advanced Analytics Dashboard
//             </Typography>
//           </Box>
//           <IconButton onClick={onClose}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//         <Typography variant="body2" color="text.secondary" mt={1}>
//           Comprehensive platform analytics and performance metrics
//         </Typography>
//       </DialogTitle>

//       <DialogContent
//         dividers
//         sx={{ maxHeight: "75vh", overflowY: "auto", pt: 3 }}
//       >
//         {/* Metrics Cards */}
//         <Grid container spacing={2} mb={4}>
//           {metrics.map((metric, index) => (
//             <Grid item xs={12} md={3} key={index}>
//               <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
//                 <Box display="flex" justifyContent="space-between" mb={1}>
//                   <Typography variant="subtitle2" fontWeight={600}>
//                     {metric.title}
//                   </Typography>
//                   {metric.icon}
//                 </Box>
//                 <Typography variant="h5" fontWeight={700}>
//                   {metric.value}
//                 </Typography>
//                 <Box display="flex" alignItems="center" gap={1} mt={1}>
//                   <TrendingUp size={14} style={{ color: "#22c55e" }} />
//                   <Typography
//                     variant="caption"
//                     sx={{ color: "#22c55e", fontWeight: 500 }}
//                   >
//                     +{metric.growth}%
//                   </Typography>
//                   <Typography variant="caption" color="text.secondary">
//                     vs last month
//                   </Typography>
//                 </Box>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Department Distribution */}
//         <Paper variant="outlined" sx={{ p: 3, mb: 4, borderRadius: 2 }}>
//           <Typography variant="subtitle1" fontWeight={600} gutterBottom>
//             Department Distribution
//           </Typography>
//           <Typography variant="body2" color="text.secondary" mb={2}>
//             User distribution across departments
//           </Typography>
//           {Object.entries(departmentStats).map(([dept, count]) => (
//             <Box key={dept} mb={2}>
//               <Box display="flex" justifyContent="space-between" mb={0.5}>
//                 <Typography variant="body2">{dept}</Typography>
//                 <Typography variant="body2" fontWeight={500}>
//                   {count} users ({Math.round((count / users.length) * 100)}%)
//                 </Typography>
//               </Box>
//               <LinearProgress
//                 variant="determinate"
//                 value={(count / users.length) * 100}
//                 sx={{
//                   height: 8,
//                   borderRadius: 4,
//                   "& .MuiLinearProgress-bar": { borderRadius: 4 },
//                 }}
//               />
//             </Box>
//           ))}
//         </Paper>

//         {/* Industry Analysis */}
//         <Paper variant="outlined" sx={{ p: 3, mb: 4, borderRadius: 2 }}>
//           <Typography variant="subtitle1" fontWeight={600} gutterBottom>
//             Client Industry Analysis
//           </Typography>
//           <Typography variant="body2" color="text.secondary" mb={2}>
//             Distribution of clients by industry
//           </Typography>
//           <Grid container spacing={2}>
//             {Object.entries(industryStats).map(([industry, count]) => (
//               <Grid item xs={12} sm={6} md={4} key={industry}>
//                 <Paper
//                   variant="outlined"
//                   sx={{
//                     p: 2,
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     borderRadius: 2,
//                   }}
//                 >
//                   <Typography fontWeight={500}>{industry}</Typography>
//                   <Chip
//                     label={`${count} clients`}
//                     variant="outlined"
//                     size="small"
//                   />
//                 </Paper>
//               </Grid>
//             ))}
//           </Grid>
//         </Paper>

//         {/* System Performance */}
//         <Paper variant="outlined" sx={{ p: 3, mb: 4, borderRadius: 2 }}>
//           <Typography variant="subtitle1" fontWeight={600} gutterBottom>
//             System Performance
//           </Typography>
//           <Typography variant="body2" color="text.secondary" mb={2}>
//             Current system health and performance metrics
//           </Typography>
//           <Grid container spacing={2}>
//             {[
//               { label: "System Uptime", value: 99.8 },
//               { label: "Server Load", value: 23 },
//               { label: "Memory Usage", value: 67 },
//               { label: "Database Performance", value: 95 },
//             ].map((metric) => (
//               <Grid item xs={12} sm={6} key={metric.label}>
//                 <Box mb={2}>
//                   <Box display="flex" justifyContent="space-between">
//                     <Typography variant="body2">{metric.label}</Typography>
//                     <Typography variant="body2" fontWeight={600}>
//                       {metric.value}%
//                     </Typography>
//                   </Box>
//                   <LinearProgress
//                     variant="determinate"
//                     value={metric.value}
//                     sx={{
//                       height: 8,
//                       borderRadius: 4,
//                       "& .MuiLinearProgress-bar": { borderRadius: 4 },
//                     }}
//                   />
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Paper>

//         {/* Activity Summary */}
//         <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
//           <Typography variant="subtitle1" fontWeight={600} gutterBottom>
//             Activity Summary
//           </Typography>
//           <Typography variant="body2" color="text.secondary" mb={2}>
//             Platform activity over the last 30 days
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} md={4}>
//               <Paper
//                 variant="outlined"
//                 sx={{ p: 2, textAlign: "center", borderRadius: 2 }}
//               >
//                 <Typography variant="h5" color="primary" fontWeight={600}>
//                   1,247
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   User Logins
//                 </Typography>
//               </Paper>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Paper
//                 variant="outlined"
//                 sx={{ p: 2, textAlign: "center", borderRadius: 2 }}
//               >
//                 <Typography
//                   variant="h5"
//                   sx={{ color: "#22c55e", fontWeight: 600 }}
//                 >
//                   89
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   New Candidates
//                 </Typography>
//               </Paper>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Paper
//                 variant="outlined"
//                 sx={{ p: 2, textAlign: "center", borderRadius: 2 }}
//               >
//                 <Typography
//                   variant="h5"
//                   sx={{ color: "#8b5cf6", fontWeight: 600 }}
//                 >
//                   156
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   System Actions
//                 </Typography>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Paper>
//       </DialogContent>

//       <DialogActions>
//         <Button onClick={onClose} variant="contained" color="primary">
//           Close
//         </Button>
//       </DialogActions>
//     </Dialog>,
//     document.body
//   );
// }


"use client";

import React from "react";
import { createPortal } from "react-dom";
import {
  BarChart3,
  TrendingUp,
  Users,
  Activity,
  DollarSign
} from "lucide-react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Grid,
  IconButton,
  LinearProgress,
  Chip,
  Button,
  Card,
  CardContent
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

export function AnalyticsDashboardModal({ isOpen, onClose, users, clients, candidates }) {
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const activeClients = clients.filter((c) => c.status === "Active").length;
  const totalRevenue = clients.reduce((sum, client) => sum + client.contractValue, 0);

  const departmentStats = {
    Administration: users.filter((u) => u.department === "Administration").length,
    Sales: users.filter((u) => u.department === "Sales").length,
    Recruitment: users.filter((u) => u.department === "Recruitment").length,
    "Account Management": users.filter((u) => u.department === "Account Management").length,
    Operations: users.filter((u) => u.department === "Operations").length
  };

  const industryStats = clients.reduce((acc, client) => {
    acc[client.industry] = (acc[client.industry] || 0) + 1;
    return acc;
  }, {});

  const metrics = [
    { title: "Total Users", value: users.length, growth: 15.2, icon: <Users size={16} /> },
    { title: "Active Clients", value: activeClients, growth: 9.8, icon: <Activity size={16} /> },
    { title: "Total Revenue", value: `$${totalRevenue.toLocaleString()}`, growth: 23.4, icon: <DollarSign size={16} /> },
    { title: "Candidates", value: candidates.length, growth: 12.3, icon: <Users size={16} /> }
  ];

  return createPortal(
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="lg">
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={1}>
            <BarChart3 size={20} />
            <Typography variant="h6" fontWeight={600}>
              Advanced Analytics Dashboard
            </Typography>
          </Box>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" mt={1}>
          Comprehensive platform analytics and performance metrics
        </Typography>
      </DialogTitle>

      <DialogContent dividers sx={{ maxHeight: "80vh", overflowY: "auto" }}>
        {/* Metrics Cards */}
        <Grid container spacing={2} mb={3}>
          {metrics.map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card variant="outlined" sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        {item.title}
                      </Typography>
                      <Typography variant="h5" fontWeight={700}>
                        {item.value}
                      </Typography>
                      <Box display="flex" alignItems="center" gap={0.5} mt={1}>
                        <TrendingUp size={14} color="#22c55e" />
                        <Typography variant="caption" color="#22c55e" fontWeight={600}>
                          +{item.growth}%
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          vs last month
                        </Typography>
                      </Box>
                    </Box>
                    {item.icon}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Department Distribution */}
        <Card variant="outlined" sx={{ borderRadius: 2, mb: 3 }}>
          <CardContent>
            <Typography variant="subtitle1" fontWeight={600}>
              Department Distribution
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              User distribution across departments
            </Typography>
            {Object.entries(departmentStats).map(([dept, count]) => (
              <Box key={dept} mb={2}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2">{dept}</Typography>
                  <Typography variant="body2">
                    {count} users ({Math.round((count / users.length) * 100)}%)
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={(count / users.length) * 100}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    mt: 1,
                    backgroundColor: "#f1f5f9",
                    "& .MuiLinearProgress-bar": {
                      borderRadius: 5,
                      backgroundColor: "#000"
                    }
                  }}
                />
              </Box>
            ))}
          </CardContent>
        </Card>

        {/* Industry Analysis */}
        <Card variant="outlined" sx={{ borderRadius: 2, mb: 3 }}>
          <CardContent>
            <Typography variant="subtitle1" fontWeight={600}>
              Client Industry Analysis
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Distribution of clients by industry
            </Typography>
            <Grid container spacing={2}>
              {Object.entries(industryStats).map(([industry, count]) => (
                <Grid item xs={12} sm={6} md={4} key={industry}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    p={2}
                    border="1px solid #e0e0e0"
                    borderRadius={2}
                  >
                    <Typography>{industry}</Typography>
                    <Chip label={`${count} clients`} size="small" variant="outlined" />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

        {/* System Performance */}
        <Card variant="outlined" sx={{ borderRadius: 2, mb: 3 }}>
          <CardContent>
            <Typography variant="subtitle1" fontWeight={600}>
              System Performance
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Current system health and performance metrics
            </Typography>
            <Grid container spacing={2}>
              {[
                { label: "System Uptime", value: 99.8 },
                { label: "Server Load", value: 23 },
                { label: "Memory Usage", value: 67 },
                { label: "Database Performance", value: 95 }
              ].map((metric) => (
                <Grid item xs={12} sm={6} key={metric.label}>
                  <Box mb={1}>
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="body2">{metric.label}</Typography>
                      <Typography variant="body2" fontWeight={600}>
                        {metric.value}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={metric.value}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        mt: 1,
                        backgroundColor: "#f1f5f9",
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 5,
                          backgroundColor: "#000"
                        }
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

        {/* Activity Summary */}
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
          <CardContent>
            <Typography variant="subtitle1" fontWeight={600}>
              Activity Summary
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Platform activity over the last 30 days
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Box textAlign="center" p={2} border="1px solid #e0e0e0" borderRadius={2}>
                  <Typography variant="h5" color="primary" fontWeight={600}>
                    1,247
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    User Logins
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box textAlign="center" p={2} border="1px solid #e0e0e0" borderRadius={2}>
                  <Typography variant="h5" sx={{ color: "#22c55e", fontWeight: 600 }}>
                    89
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    New Candidates
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box textAlign="center" p={2} border="1px solid #e0e0e0" borderRadius={2}>
                  <Typography variant="h5" sx={{ color: "#8b5cf6", fontWeight: 600 }}>
                    156
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    System Actions
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>,
    document.body
  );
}
