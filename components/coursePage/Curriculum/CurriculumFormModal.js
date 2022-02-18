import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Modal, Backdrop, Fade } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CloseIcon from "@material-ui/icons/Close";
import { postEnquiry, getIPDetails } from '../../../apiCalls';
import CourseButtonComponent from '../CourseButtonComponent/CourseButtonComponent';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import MuiPhoneNumber from "mui-phone-input-ssr";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        background: "#fff",
        display: "grid",
        gridTemplateColumns: "40% 60%",
        borderRadius: "4px",
        boxShadow: theme.shadows[5],
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "100%",
        },
        "& > div:first-child": {
            padding: "1rem",
            background: "#f7faf7",
            // [theme.breakpoints.down("sm")]: {
            //     display: "none",
            // },
            "& p": {
                display: "flex",
                alignItems: "center",
            },
        },
        "& > div:last-child": {
            position: "relative",
            margin: "1rem",
        },
    },
    modalForm: {
        marginTop: "2.5rem",
    },
    closebttn: {
        position: "absolute",
        right: 0,
        [theme.breakpoints.down("sm")]: {
            // display: "none",
            top: '-64px'
        },
        "&:hover": {
            cursor: "pointer",
        },
    },
    solutions: {
        display: 'block',
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    inputDiv: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1rem",
    },
    allInputStyle: {
        width: '220px',
        // [theme.breakpoints.down("sm")]: {
        //   width: '100%',
        // },
    },
    thanksbox: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },


    checkicon: {
        fontSize: "100px",
        color: "#000",
    },


    thanksText: {
        fontWeight: "600",
        color: "#000",
        fontSize: "18px",
    }
}))
const CurriculumFormModal = ({ data, open, setOpen,
    handleClose,
    thankyouPopup,
    setThankyouPopup,
    course }) => {
    const classes = useStyles();
    const [alignment, setAlignment] = React.useState("OnDemand");
    const [code, setCode] = React.useState('in');

    React.useEffect(() => {
        getIPDetails().then((res) => {
            if (res && res.country_code) {
                setCode(res.country_code.toLowerCase())
                // console.log(res.country_code.toLowerCase(), 'response')
            }
        });
    }, []);

    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
        if (!emailRegex.test(e.target.email.value)) {
            alert('Email Invalid');
            return;
        }
        // if (!phoneRegex.test(e.target.phone.value)) {
        //   alert('Phone number Invalid');
        //   return;
        // }
        const ipData = await getIPDetails();
        // console.log('**********this is data.overview*************', data.overview);
        const formValue = {};
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        formValue.email = e.target.email.value;
        // formValue.phone = '+' + ipData.location.calling_code + e.target.phone.value;
        formValue.phone = e.target.phone.value;
        formValue.message = e.target.message.value;
        formValue.page_url = window.location.href;
        formValue.subject = alignment + " Course Enquiry";
        formValue.fullname = fname + ' ' + lname;
        if (course) formValue.course = course;
        if (ipData?.country_name) formValue.country = ipData.country_name;
        else formValue.country = "India";
        if (ipData?.ip) formValue.ip = ipData.ip;
        else formValue.ip = '127.0.0.1';
        await postEnquiry({ ...formValue });
        setThankyouPopup(true);
        setTimeout(handleClose, 2000);
        window.open(data.overview?.curriculum_pdf, "_blank");
    }
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div>
                            <ToggleButtonGroup
                                value={alignment}
                                exclusive
                                onChange={handleAlignment}
                                aria-label="text alignment"
                                style={{ border: "1px solid blue", marginTop: "1rem" }}
                            >
                                <ToggleButton
                                    style={{
                                        background: alignment === "Online" ? "blue" : "white",
                                    }}
                                    size="small"
                                    value="Online"
                                    aria-label="Online"
                                >
                                    <p
                                        style={{
                                            margin: "0",
                                            color: alignment === "Online" ? "white" : "blue",
                                        }}
                                    >
                                        Online
                                    </p>
                                </ToggleButton>
                                <ToggleButton
                                    style={{
                                        background: alignment === "OnDemand" ? "blue" : "white",
                                    }}
                                    size="small"
                                    value="OnDemand"
                                    aria-label="OnDemand"
                                >
                                    <p
                                        style={{
                                            margin: "0",
                                            color: alignment === "OnDemand" ? "white" : "blue",
                                        }}
                                    >
                                        On-Demand
                                    </p>
                                </ToggleButton>
                            </ToggleButtonGroup>
                            <div className={classes.solutions}>
                                <h3>Customized Solutions For Your Teams</h3>
                                <p><ChevronRightIcon color="primary" /> Upskill and reskill</p>
                                <p><ChevronRightIcon color="primary" /> Assess and benchmark</p>
                                <p><ChevronRightIcon color="primary" /> Get advanced learner insights</p>
                                <p><ChevronRightIcon color="primary" /> Leverage immersive learning</p>
                            </div>

                            {/* <div>
                  <img src={Learning} alt='learning' height="300px" width='auto' />
                </div> */}
                        </div >
                        {!thankyouPopup && <div >
                            <div className={classes.closebttn} onClick={handleClose}>
                                <CloseIcon />{" "}
                            </div>
                            <h3>Request a Custom Quote for {alignment} Training</h3>
                            <p>
                                Your Learning Advisor will get back to you within 24 hours
                            </p>
                            <form className={classes.modalForm} onSubmit={submitHandler}>
                                <div className={classes.inputDiv}>
                                    <TextField
                                        id="outlined-basic"
                                        size="small"
                                        label="First Name"
                                        name="fname"
                                        variant="outlined"
                                        style={{ marginRight: "1rem" }}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        size="small"
                                        label="Last Name"
                                        name="lname"
                                        variant="outlined"
                                    />
                                </div>
                                <div className={classes.inputDiv}>
                                    <TextField
                                        id="outlined-basic"
                                        size="small"
                                        label="Email"
                                        name="email"
                                        variant="outlined"
                                        style={{ marginRight: "1rem" }}
                                    />
                                    {/* <TextField
                      id="outlined-basic"
                      size="small"
                      label="Phone"
                      name="phone"
                      variant="outlined"
                    /> */}
                                    <MuiPhoneNumber
                                        size='small'
                                        name="phone"
                                        label="Phone"
                                        id="outlined-basic"
                                        variant="outlined"
                                        className={classes.allInputStyle}
                                        defaultCountry={code}
                                        countryCodeEditable={false}
                                    // onChange={handleOnChange}
                                    />
                                </div>
                                <div className={classes.inputDiv}>
                                    <TextField
                                        id="Message"
                                        label="Message"
                                        name="message"
                                        multiline
                                        size="small"
                                        rows={5}
                                        // defaultValue="Default Value"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </div>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    {/* <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      endIcon={<ChevronRightIcon />}
                    >
                      Get Custom Quote
                    </Button> */}
                                    <CourseButtonComponent subject='Get Custom Quote' setOpen={setOpen} type={'submit'} />
                                </div>
                            </form>
                        </div>}
                        {thankyouPopup && <div className={classes.thanksbox}>
                            <CheckCircleOutlineIcon className={classes.checkicon} />
                            <p className={classes.thanksText}>Thanks for choosing us, our expert will call u soon.</p>
                        </div>}
                    </div >
                </Fade >
            </Modal >
        </>
    )
}

export default CurriculumFormModal
