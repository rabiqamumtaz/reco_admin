import React, { useState } from "react";
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
import { Save, Building } from "lucide-react";

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
    alert("Company information saved successfully!");
  };

  const handleSaveSettings = () => {
    alert("System settings saved successfully!");
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-8 bg-gray-50 min-h-screen">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-1">
          Company Settings
        </h2>
        <p className="text-gray-600">
          Manage company information and platform settings.
        </p>
      </div>

      <div className="space-y-8">
        {/* Company Info Card */}
        <Card>
          <CardHeader
            title={
              <Box display="flex" alignItems="center" gap={1}>
                <Building size={20} />
                <Typography variant="h6" fontWeight={600}>
                  Company Information
                </Typography>
              </Box>
            }
            subheader="Update your company details and contact information"
          />

          <CardContent className="space-y-6">
            {/* Company Name and Industry */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                label="Company Name"
                placeholder="TechRecruit Solutions"
                fullWidth
                onChange={(e) =>
                  setCompanyInfo({ ...companyInfo, name: e.target.value })
                }
              />
              <TextField
                label="Industry"
                placeholder="Recruitment & Staffing"
                fullWidth
                onChange={(e) =>
                  setCompanyInfo({ ...companyInfo, industry: e.target.value })
                }
              />
            </div>

            {/* Description */}
            <TextField
              label="Description"
              placeholder="Leading recruitment platform connecting top talent with innovative companies."
              multiline
              minRows={4}
              fullWidth
              onChange={(e) =>
                setCompanyInfo({ ...companyInfo, description: e.target.value })
              }
            />

            {/* Contact Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 lg:mt-5">
              <TextField
                label="Contact Email"
                placeholder="contact@techrecruit.com"
                fullWidth
                onChange={(e) =>
                  setCompanyInfo({ ...companyInfo, email: e.target.value })
                }
              />
              <TextField
                label="Phone Number"
                placeholder="+1 (555) 123-4567"
                fullWidth
                onChange={(e) =>
                  setCompanyInfo({ ...companyInfo, phone: e.target.value })
                }
              />
            </div>

            {/* Address */}
            <TextField
              label="Address"
              placeholder="123 Business Ave, Suite 100, San Francisco, CA 94105"
              fullWidth
              onChange={(e) =>
                setCompanyInfo({ ...companyInfo, address: e.target.value })
              }
            />

            {/* Website / Founded / Employees */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 lg:mt-5">
              <TextField
                label="Website"
                placeholder="https://www.techrecruit.com"
                fullWidth
                onChange={(e) =>
                  setCompanyInfo({ ...companyInfo, website: e.target.value })
                }
              />
              <TextField
                label="Founded"
                placeholder="2018"
                fullWidth
                onChange={(e) =>
                  setCompanyInfo({ ...companyInfo, founded: e.target.value })
                }
              />
              <TextField
                label="Employee Count"
                placeholder="50-100"
                fullWidth
                onChange={(e) =>
                  setCompanyInfo({ ...companyInfo, employees: e.target.value })
                }
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button variant="contained" onClick={handleSaveCompanyInfo}>
                <Save className="mr-2 h-4 w-4" />
                Save Company Info
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Platform Settings Card */}
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
            {/* User Management */}
            <div className="space-y-4">
              <h4 className="font-medium">User Management</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <Typography variant="body2" fontWeight={500}>
                      Allow User Registration
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Allow new users to register accounts
                    </Typography>
                  </div>
                  <Chip
                    label={settings.allowRegistration ? "Enabled" : "Disabled"}
                    color={settings.allowRegistration ? "success" : "default"}
                    size="small"
                    variant="outlined"
                  />
                </div>

                <div className="flex items-center justify-between flex-wrap gap-2">
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
                      settings.requireEmailVerification ? "success" : "default"
                    }
                    size="small"
                    variant="outlined"
                  />
                </div>
              </div>
            </div>

            <Divider />

            {/* System Configuration */}
            <div className="space-y-4">
              <h4 className="font-medium pt-4">System Configuration</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <Divider />

            {/* System Status */}
            <div className="space-y-4">
              <h4 className="font-medium pt-4">System Status</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
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

                <div className="flex items-center justify-between flex-wrap gap-2">
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
                    color={settings.enableNotifications ? "success" : "default"}
                    size="small"
                    variant="outlined"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button variant="contained" onClick={handleSaveSettings}>
                <Save className="mr-2 h-4 w-4" />
                Save Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Company_Setting;
