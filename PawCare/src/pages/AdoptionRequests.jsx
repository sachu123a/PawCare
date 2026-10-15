import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Typography,
  Button,
  Grid,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Alert,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Paper,
  Tooltip,
} from '@mui/material';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import PetsIcon from '@mui/icons-material/Pets';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import PageHeader from '../components/PageHeader';
import StatusChip from '../components/StatusChip';
import { ANIMALS, RECENT_ADOPTION_REQUESTS } from '../data/mockData';

export default function AdoptionRequests() {
  const location = useLocation();
  const navigate = useNavigate();

  // State to hold requests list for interactive demo experience
  const [requestsList, setRequestsList] = useState(RECENT_ADOPTION_REQUESTS);

  // Pre-selected animal passed via navigation state from AnimalDetails
  const preselectedAnimal = location.state?.selectedAnimal || null;

  // Toggle state for adoption application form
  const [showForm, setShowForm] = useState(Boolean(preselectedAnimal));

  // Form input state
  const [formData, setFormData] = useState({
    adopterName: '',
    email: '',
    phone: '',
    animalId: preselectedAnimal ? preselectedAnimal.id : '',
    notes: '',
  });

  // Validation errors state
  const [formErrors, setFormErrors] = useState({});

  // Submission success notification state
  const [successMessage, setSuccessMessage] = useState('');

  // Dialog state for "View" request details
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // If navigated with a preselected animal, open the form and sync state
  useEffect(() => {
    if (preselectedAnimal) {
      setShowForm(true);
      setFormData((prev) => ({
        ...prev,
        animalId: preselectedAnimal.id,
      }));
    }
  }, [preselectedAnimal]);

  // Compute metrics for the 4 summary cards
  const totalCount = requestsList.length;
  const pendingCount = requestsList.filter((r) => r.status === 'Pending').length;
  const approvedCount = requestsList.filter((r) => r.status === 'Approved').length;
  const rejectedCount = requestsList.filter((r) => r.status === 'Rejected').length;

  return (
    <Box>
      {/* Page Header with Action Button */}
      <PageHeader
        title="Adoption Requests"
        subtitle="Review adoption applications, schedule applicant interviews, and track home placement workflows."
        badge={`${totalCount} Total Requests`}
        action={
          <Button
            variant="contained"
            size="large"
            startIcon={showForm ? <CloseIcon /> : <AddCircleOutlineOutlinedIcon />}
            onClick={() => {
              setShowForm(!showForm);
              setSuccessMessage('');
            }}
            sx={{
              fontWeight: 700,
              fontSize: '0.92rem',
              py: 1.2,
              px: 3,
            }}
          >
            {showForm ? 'Close Form' : 'New Adoption Request'}
          </Button>
        }
      />

      {/* 4 Summary Cards: Total Requests, Pending, Approved, Rejected */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Total Requests Card */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card
            sx={{
              p: 2.5,
              borderLeft: '5px solid #1B4332',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                Total Requests
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#1B4332', mt: 0.5 }}>
                {totalCount}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                All recorded applications
              </Typography>
            </Box>
            <Avatar sx={{ bgcolor: 'rgba(27, 67, 50, 0.1)', color: '#1B4332', width: 48, height: 48 }}>
              <AssignmentOutlinedIcon />
            </Avatar>
          </Card>
        </Grid>

        {/* Pending Card */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card
            sx={{
              p: 2.5,
              borderLeft: '5px solid #D48B28',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                Pending
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#D48B28', mt: 0.5 }}>
                {pendingCount}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Awaiting home checks
              </Typography>
            </Box>
            <Avatar sx={{ bgcolor: 'rgba(212, 139, 40, 0.1)', color: '#D48B28', width: 48, height: 48 }}>
              <AssignmentLateOutlinedIcon />
            </Avatar>
          </Card>
        </Grid>

        {/* Approved Card */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card
            sx={{
              p: 2.5,
              borderLeft: '5px solid #1B5E20',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                Approved
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#1B5E20', mt: 0.5 }}>
                {approvedCount}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Contract stage
              </Typography>
            </Box>
            <Avatar sx={{ bgcolor: 'rgba(27, 94, 32, 0.1)', color: '#1B5E20', width: 48, height: 48 }}>
              <CheckCircleOutlinedIcon />
            </Avatar>
          </Card>
        </Grid>

        {/* Rejected Card */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card
            sx={{
              p: 2.5,
              borderLeft: '5px solid #B91C1C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                Rejected
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#B91C1C', mt: 0.5 }}>
                {rejectedCount}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Non-eligible criteria
              </Typography>
            </Box>
            <Avatar sx={{ bgcolor: 'rgba(185, 28, 28, 0.1)', color: '#B91C1C', width: 48, height: 48 }}>
              <CancelOutlinedIcon />
            </Avatar>
          </Card>
        </Grid>
      </Grid>

      {/* Success Notification Alert */}
      {successMessage && (
        <Alert
          severity="success"
          onClose={() => setSuccessMessage('')}
          sx={{
            mb: 3,
            borderRadius: 3,
            backgroundColor: '#E8F5E9',
            color: '#1B5E20',
            fontWeight: 600,
            border: '1px solid #A5D6A7',
          }}
        >
          {successMessage}
        </Alert>
      )}

      {/* Pre-Selected Animal Notice Banner (When navigated from Animal Details) */}
      {preselectedAnimal && (
        <Alert
          severity="info"
          icon={<PetsIcon sx={{ color: '#1B4332' }} />}
          sx={{
            mb: 3,
            borderRadius: 3,
            backgroundColor: '#F0FDF4',
            color: '#166534',
            border: '1px solid #BBF7D0',
          }}
        >
          Creating an adoption application for <strong>{preselectedAnimal.name}</strong> ({preselectedAnimal.breed})! The animal has been pre-selected in the form below.
        </Alert>
      )}

      {/* Adoption Request Form Section */}
      {showForm && (
        <Card
          sx={{
            p: { xs: 2.5, sm: 3.5 },
            mb: 4,
            border: '1px solid rgba(27, 67, 50, 0.15)',
            boxShadow: '0 8px 24px rgba(27, 67, 50, 0.08)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <PetsIcon sx={{ color: '#1B4332' }} />
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#1B4332' }}>
                Submit New Adoption Application
              </Typography>
            </Box>
            <IconButton size="small" onClick={() => setShowForm(false)} sx={{ color: 'text.secondary' }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
            Fill in the applicant details to log an adoption request. All submissions are handled frontend-only for demo purposes.
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Box component="form" noValidate>
            <Grid container spacing={2.5}>
              {/* Adopter Name */}
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField
                  fullWidth
                  required
                  id="adopterName"
                  name="adopterName"
                  label="Adopter Name"
                  placeholder="e.g. Eleanor Vance"
                  defaultValue={formData.adopterName}
                  error={Boolean(formErrors.adopterName)}
                  helperText={formErrors.adopterName}
                />
              </Grid>

              {/* Email */}
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField
                  fullWidth
                  required
                  id="email"
                  name="email"
                  type="email"
                  label="Email Address"
                  placeholder="name@example.com"
                  defaultValue={formData.email}
                  error={Boolean(formErrors.email)}
                  helperText={formErrors.email}
                />
              </Grid>

              {/* Phone */}
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField
                  fullWidth
                  required
                  id="phone"
                  name="phone"
                  label="Phone Number"
                  placeholder="+1 (555) 000-0000"
                  defaultValue={formData.phone}
                  error={Boolean(formErrors.phone)}
                  helperText={formErrors.phone}
                />
              </Grid>

              {/* Selected Animal Dropdown */}
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <FormControl fullWidth required error={Boolean(formErrors.animalId)}>
                  <InputLabel id="select-animal-label">Selected Animal</InputLabel>
                  <Select
                    labelId="select-animal-label"
                    id="animalId"
                    name="animalId"
                    defaultValue={formData.animalId}
                    label="Selected Animal"
                  >
                    {ANIMALS.map((animal) => (
                      <MenuItem key={animal.id} value={animal.id}>
                        {animal.name} ({animal.breed} - {animal.type})
                      </MenuItem>
                    ))}
                  </Select>
                  {formErrors.animalId && (
                    <FormHelperText>{formErrors.animalId}</FormHelperText>
                  )}
                </FormControl>
              </Grid>

              {/* Application Notes */}
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  id="notes"
                  name="notes"
                  label="Application Notes / Housing & Family Environment (Optional)"
                  placeholder="Mention yard size, other pets at home, schedule, and experience with this breed..."
                  defaultValue={formData.notes}
                />
              </Grid>
            </Grid>

            {/* Form Action Buttons */}
            <Box sx={{ mt: 3, display: 'flex', gap: 1.5, justifyContent: 'flex-end' }}>
              <Button
                variant="outlined"
                onClick={() => {
                  setShowForm(false);
                  setFormErrors({});
                }}
                sx={{
                  color: '#687E71',
                  borderColor: 'rgba(27, 67, 50, 0.2)',
                  fontWeight: 600,
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                startIcon={<SendOutlinedIcon />}
                sx={{
                  fontWeight: 700,
                  px: 3,
                }}
              >
                Submit Application
              </Button>
            </Box>
          </Box>
        </Card>
      )}

      {/* Main Material UI Requests Table */}
      <Card sx={{ p: 3 }}>
        <Box sx={{ mb: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#1B4332' }}>
              Adoption Application Records
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.88rem' }}>
              All submitted adoption requests with contact and status details (Frontend demo data)
            </Typography>
          </Box>
        </Box>

        <TableContainer sx={{ borderRadius: 3, border: '1px solid rgba(27, 67, 50, 0.08)' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Request ID</TableCell>
                <TableCell>Adopter Name</TableCell>
                <TableCell>Animal Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Request Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {requestsList.map((request) => (
                <TableRow key={request.id}>
                  {/* 1. Request ID */}
                  <TableCell sx={{ fontWeight: 800, color: '#1B4332', fontSize: '0.85rem' }}>
                    {request.id}
                  </TableCell>

                  {/* 2. Adopter Name */}
                  <TableCell sx={{ fontWeight: 700, color: 'text.primary' }}>
                    {request.adopterName}
                  </TableCell>

                  {/* 3. Animal Name */}
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar
                        src={request.animalImage}
                        alt={request.animalName}
                        sx={{ width: 40, height: 40, borderRadius: 2 }}
                      />
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: '#1B4332',
                            cursor: 'pointer',
                            '&:hover': { textDecoration: 'underline' },
                          }}
                          onClick={() => navigate(`/animals/${request.animalId}`)}
                        >
                          {request.animalName}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                          {request.animalType}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  {/* 4. Email */}
                  <TableCell sx={{ fontSize: '0.85rem' }}>
                    {request.adopterEmail}
                  </TableCell>

                  {/* 5. Phone */}
                  <TableCell sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>
                    {request.adopterPhone}
                  </TableCell>

                  {/* 6. Request Date */}
                  <TableCell sx={{ fontSize: '0.85rem', color: 'text.secondary', whiteSpace: 'nowrap' }}>
                    {request.requestDate}
                  </TableCell>

                  {/* 7. Status */}
                  <TableCell>
                    <StatusChip status={request.status} />
                  </TableCell>

                  {/* 8. Action: View button opening details dialog */}
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<VisibilityOutlinedIcon />}
                      sx={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        py: 0.6,
                        px: 1.8,
                        backgroundColor: '#1B4332',
                        '&:hover': { backgroundColor: '#2D6A4F' },
                      }}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* Request Details View Dialog */}
      <Dialog
        open={openDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            p: 1,
            border: '1px solid rgba(27, 67, 50, 0.1)',
            boxShadow: '0 20px 40px rgba(27, 67, 50, 0.15)',
          },
        }}
      >
        {selectedRequest && (
          <>
            <DialogTitle
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pb: 1,
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#1B4332' }}>
                  Application Details
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  Record: {selectedRequest.id}
                </Typography>
              </Box>
              <IconButton size="small" sx={{ color: 'text.secondary' }}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <Divider />

            <DialogContent sx={{ py: 2.5 }}>
              <Stack spacing={2.5}>
                {/* Animal Spotlight Card in Modal */}
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    backgroundColor: '#FAF8F5',
                    border: '1px solid rgba(27, 67, 50, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      src={selectedRequest.animalImage}
                      alt={selectedRequest.animalName}
                      sx={{ width: 56, height: 56, borderRadius: 2.5 }}
                    />
                    <Box>
                      <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', fontWeight: 700 }}>
                        Requested Pet
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: '#1B4332', lineHeight: 1.2 }}>
                        {selectedRequest.animalName}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {selectedRequest.animalType}
                      </Typography>
                    </Box>
                  </Box>

                  <StatusChip status={selectedRequest.status} size="medium" />
                </Paper>

                {/* Adopter Information Section */}
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#1B4332', mb: 1.5 }}>
                    Adopter Contact & Profile
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PersonOutlinedIcon sx={{ color: '#2D6A4F', fontSize: 20 }} />
                        <Box>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            Full Name
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>
                            {selectedRequest.adopterName}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CalendarMonthOutlinedIcon sx={{ color: '#2D6A4F', fontSize: 20 }} />
                        <Box>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            Application Date
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>
                            {selectedRequest.requestDate}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <EmailOutlinedIcon sx={{ color: '#2D6A4F', fontSize: 20 }} />
                        <Box>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            Email Address
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {selectedRequest.adopterEmail}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PhoneOutlinedIcon sx={{ color: '#2D6A4F', fontSize: 20 }} />
                        <Box>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            Phone Number
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {selectedRequest.adopterPhone}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Divider />

                {/* Application Notes / Reason */}
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#1B4332', mb: 1 }}>
                    Application Reason & Housing Notes:
                  </Typography>
                  <Paper
                    variant="outlined"
                    sx={{
                      p: 2,
                      borderRadius: 2.5,
                      backgroundColor: '#F7F5F0',
                      border: '1px solid rgba(27, 67, 50, 0.08)',
                    }}
                  >
                    <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.6 }}>
                      "{selectedRequest.reason}"
                    </Typography>
                  </Paper>
                </Box>
              </Stack>
            </DialogContent>

            <DialogActions sx={{ p: 2, pt: 1, gap: 1 }}>
              <Button
                variant="outlined"
                onClick={() => {
                  navigate(`/animals/${selectedRequest.animalId}`);
                }}
                sx={{
                  color: '#2D6A4F',
                  borderColor: 'rgba(45, 106, 79, 0.3)',
                  fontWeight: 700,
                }}
              >
                View Animal Profile
              </Button>
              <Button
                variant="contained"
                sx={{
                  fontWeight: 700,
                  px: 3,
                }}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}
