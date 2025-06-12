import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  Divider,
  Chip,
  Box,
} from "@mui/material";
import { Mail, Phone, MapPin, Globe, Save, Building } from "lucide-react";
import { useState } from "react";

const Company_Setting = () => {
  const [companyInfo, setCompanyInfo] = useState({
    name: "TechRecruit Solutions",
    description:
      "Leading recruitment platform connecting top talent with innovative companies.",
    email: "contact@techrecruit.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business Ave, Suite 100, San Francisco, CA 94105",
    website: "https://www.techrecruit.com",
    industry: "Recruitment & Staffing",
    founded: "2018",
    employees: "50-100",
    timezone: "Pacific Standard Time (PST)",
  });

  const [settings, setSettings] = useState({
    allowRegistration: true,
    requireEmailVerification: true,
    enableNotifications: true,
    maintenanceMode: false,
    dataRetentionDays: 365,
    sessionTimeout: 30,
  });

  const handleSaveCompanyInfo = () => {
    // In a real app, this would save to the backend
    alert("Company information saved successfully!");
  };

  const handleSaveSettings = () => {
    // In a real app, this would save to the backend
    alert("System settings saved successfully!");
  };

  return (
    <>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Company Settings
          </h2>
          <p className="text-muted-foreground">
            Manage company information and platform settings.
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader
              title={
                <Box display="flex" alignItems="center" gap={1}>
                  <Building style={{ height: 20, width: 20 }} />
                  <Typography variant="h6" fontWeight={600}>
                    Company Information
                  </Typography>
                </Box>
              }
              subheader="Update your company details and contact information"
            />

            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <TextField
                  label="Company Name"
                    placeholder="TechRecruit Solutions"
                    // value={companyInfo.name}
                    onChange={(e) =>
                      setCompanyInfo({ ...companyInfo, name: e.target.value })
                    }
                    fullWidth
                  />
                </div>
                <div className="space-y-2">
                  <TextField
                    label="Industry"
                    value={companyInfo.industry}
                    onChange={(e) =>
                      setCompanyInfo({ ...companyInfo, name: e.target.value })
                    }
                    sx={{ width: 505 }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <TextField
                  id="description"
                  placeholder="Company Description"
                  value={companyInfo.description}
                  onChange={(e) =>
                    setCompanyInfo({
                      ...companyInfo,
                      description: e.target.value,
                    })
                  }
                  multiline
                  minRows={4} // similar to min-h-[100px]
                  fullWidth
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  {/* <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /> */}
                  <TextField
                    label="Contact Email"
                    value={companyInfo.email}
                    onChange={(e) =>
                      setCompanyInfo({ ...companyInfo, name: e.target.value })
                    }
                    sx={{ width: 505 }}
                  />
                </div>
                <div className="space-y-2">
                  <TextField
                    label="Phone Number"
                    value={companyInfo.phone}
                    onChange={(e) =>
                      setCompanyInfo({ ...companyInfo, name: e.target.value })
                    }
                    sx={{ width: 505 }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <TextField
                  label="Address"
                  value={companyInfo.address}
                  onChange={(e) =>
                    setCompanyInfo({ ...companyInfo, name: e.target.value })
                  }
                  fullWidth
                />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <TextField
                    label="Website"
                    value={companyInfo.website}
                    onChange={(e) =>
                      setCompanyInfo({ ...companyInfo, name: e.target.value })
                    }
                    sx={{ width: 330 }}
                  />
                </div>
                <div className="space-y-2">
                  <TextField
                    label="Founded"
                    value={companyInfo.founded}
                    onChange={(e) =>
                      setCompanyInfo({ ...companyInfo, name: e.target.value })
                    }
                    sx={{ width: 330 }}
                  />
                </div>
                <div className="space-y-2">
                  <TextField
                    label="Employee Count"
                    value={companyInfo.employees}
                    onChange={(e) =>
                      setCompanyInfo({ ...companyInfo, name: e.target.value })
                    }
                    sx={{ width: 330 }}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSaveCompanyInfo}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Company Info
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader
              title={
                <Box display="flex" alignItems="center" gap={1}>
                  <Typography variant="h6" fontWeight={600}>
                    Platform Settings
                  </Typography>
                </Box>
              }
              subheader="Configure system-wide settings and preferences"
            />
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">User Management</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Typography variant="body2" fontWeight={500}>
                        Allow User Registration
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Allow new users to register accounts
                      </Typography>
                    </div>

                    <Chip
                      label={
                        settings.allowRegistration ? "Enabled" : "Disabled"
                      }
                      color={settings.allowRegistration ? "success" : "default"}
                      size="small"
                      variant="outlined"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Typography variant="body2" fontWeight={500}>
                        Email Verification Required
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Require email verification for new accounts
                      </Typography>
                    </div>

                    <Chip
                      label={
                        settings.requireEmailVerification
                          ? "Required"
                          : "Optional"
                      }
                      color={
                        settings.requireEmailVerification
                          ? "success"
                          : "default"
                      }
                      size="small"
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>

              <Divider />

              <div className="space-y-4">
                <h4 className="font-medium pt-4">System Configuration</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <TextField
                      label="Data Retention (Days)"
                      type="number"
                      fullWidth
                      value={settings.dataRetentionDays}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          dataRetentionDays: Number.parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <TextField
                      label="Session Timeout (Minutes)"
                      type="number"
                      fullWidth
                      value={settings.sessionTimeout}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          sessionTimeout: Number.parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <Divider />

              <div className="space-y-4">
                <h4 className="font-medium pt-4">System Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Typography variant="body2" fontWeight={500}>
                        Maintenance Mode
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Put the system in maintenance mode
                      </Typography>
                    </div>
                    <Chip
                      label={settings.maintenanceMode ? "Active" : "Normal"}
                      color={settings.maintenanceMode ? "error" : "default"}
                      size="small"
                      variant="outlined"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Typography variant="body2" fontWeight={500}>
                        Notifications
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        System-wide notification settings
                      </Typography>
                    </div>

                    <Chip
                      label={
                        settings.enableNotifications ? "Enabled" : "Disabled"
                      }
                      color={
                        settings.enableNotifications ? "success" : "default"
                      }
                      size="small"
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSaveSettings}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Company_Setting;
