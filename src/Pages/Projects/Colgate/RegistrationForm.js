import React from "react";
import "./RegistrationForm.scss";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import axios from "axios";
import Compressor from "compressorjs";
import { useState } from "react";
import { Button } from "react-bootstrap";

import fileUpload from "../../../Assets/Projects/Colgate/fileUpload.svg";

const ColgateForm = () => {
  //   const [compressedFile, setCompressedFile] = useState(null);

  //   const handleCompressedUpload = (e) => {
  //     const image = e.target.files[0];
  //     new Compressor(image, {
  //       quality: 0.6, // 0.6 can also be used, but its not recommended to go below.
  //       success: (compressedResult) => {
  //         // compressedResult has the compressed file.
  //         // Use the compressed file to upload the images to your server.
  //         setCompressedFile();
  //       },
  //     });
  //   };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  let logoFile = document.getElementById("custom-file");

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  //   if (logoFile.files[0].size > 50000) {
  //     alert("Logo image file size should not exceed 500 KB.");
  //   }

  //   const sendEmail = (e) => {
  //     // e.stopPropagation();
  //     e.preventDefault();

  //

  const onSubmit = async (data, e) => {
    console.log("data");
    console.log(data);

    e.preventDefault();

    emailjs
      .sendForm(
        "service_qd6c2wx",
        "template_hvozy8t",
        e.target,
        "Blp53EzBsHt7ji3lO"
      )
      .then(
        (result) => {
          console.log(e.target);
          //   setloading(false);
          //   setModalTitle("Congratulations");
          //   setRefresh(true);
          //   setError(
          //     "Your results has been sent, check your email for payment instructions"
          //   );
        },
        (error) => {
          //   setloading(false);
          //   setModalTitle("Error");
          //   setError(error.text);
          console.log(error);
          return;
        }
      );

    await axios
      .post(
        "https://sheet.best/api/sheets/113d9cbd-5982-40df-89f7-131f30653ec5",
        data
      )
      .then((response) => {
        console.log(response);
      });

    // console.log(data);
    alert(
      "Your EOI submission has been successfully completed. Kindly check your email inbox for confirmation mail."
    );
  };
  //   console.log(error);

  return (
    <>
      <form
        className="form container py-5 poppins"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="row">
          {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="col coll">
            <div className="row">
              <label className="flexx" htmlFor="name">
                Full Name of Liaison Officer
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Type..."
                {...register("name", {
                  required: true,
                  maxLength: 80,
                })}
              />
            </div>
            <div className="row">
              <label className="flexx" htmlFor="gender">
                Gender
              </label>
              <select
                {...register("gender", { required: true })}
                id="gender"
                placeholder="Choose..."
              >
                <option label="Choose..."></option>
                <option value="Male">Male</option>
                <option value=" Female"> Female</option>
                <option value=" Other"> Other</option>
              </select>
            </div>
            <div className="row">
              <label className="flexx" htmlFor="whatsapp">
                Whatsapp Number
              </label>
              <input
                id="whatsapp"
                type="tel"
                placeholder="Type Here..."
                {...register("whatsapp", { required: true })}
              />
            </div>
            <div className="row">
              <label className="flexx" htmlFor="affiliation">
                Affiliated IADS member association
              </label>
              <input
                name="affiliation"
                id="affiliation"
                type="text"
                placeholder="Type Here..."
                {...register("affiliation", {
                  required: true,
                })}
              />
            </div>
            <div className="row">
              <label className="flexx" htmlFor="country">
                Country
              </label>
              <select id="country" {...register("country", { required: true })}>
                <option label="Choose..."></option>
                <option label="Choose..."></option>
                <option value="Croatia">Croatia</option>
                <option value=" Czech republic"> Czech republic</option>
                <option value=" Ecuador"> Ecuador</option>
                <option value=" Egypt"> Egypt</option>
                <option value=" Finland"> Finland</option>
                <option value=" France"> France</option>
                <option value=" Germany"> Germany</option>
                <option value=" Guatemala"> Guatemala</option>
                <option value=" India"> India</option>
                <option value=" Indonesia"> Indonesia</option>
                <option value=" Iran"> Iran</option>
                <option value=" Iraq"> Iraq</option>
                <option value=" Italy"> Italy</option>
                <option value=" Japan"> Japan</option>
                <option value=" Jordan"> Jordan</option>
                <option value=" Kazakhstan"> Kazakhstan</option>
                <option value=" Latvia"> Latvia</option>
                <option value=" Lithuania"> Lithuania</option>
                <option value=" Malaysia"> Malaysia</option>
                <option value=" Morocco"> Morocco</option>
                <option value=" Nigeria"> Nigeria</option>
                <option value=" North Cyprus"> North Cyprus</option>
                <option value=" Pakistan"> Pakistan</option>
                <option value=" Palestine"> Palestine</option>
                <option value=" Poland"> Poland</option>
                <option value=" Portugal"> Portugal</option>
                <option value=" Qatar"> Qatar</option>
                <option value=" Romania"> Romania</option>
                <option value=" Romania"> Romania</option>
                <option value=" Romania"> Romania</option>
                <option value=" Rwanda"> Rwanda</option>
                <option value=" Slovakia"> Slovakia</option>
                <option value=" Slovenia"> Slovenia</option>
                <option value=" Sudan"> Sudan</option>
                <option value=" Sweden"> Sweden</option>
                <option value=" Taiwan"> Taiwan</option>
                <option value=" Thailand"> Thailand</option>
                <option value=" Tunisia"> Tunisia</option>
                <option value=" Turkey"> Turkey</option>
                <option value=" Zimbabwe"> Zimbabwe</option>
              </select>
            </div>

            <div className="row">
              <label className="flexx" htmlFor="twitter">
                Twitter Account
              </label>
              <input
                type="text"
                placeholder="Type Here..."
                {...register("twitter", { required: true })}
              />
            </div>

            <div className="row">
              <label className="flexx" htmlFor="hear">
                How did you hear about this competition?
              </label>
              <select id="hear" {...register("howDidYouHear")}>
                <option label="Choose..."></option>
                <option value="Orientation Session">Orientation Session</option>
                <option value=" IADS Social Media"> IADS Social Media</option>
                <option value=" Peer Referral"> Peer Referral</option>
              </select>
            </div>

            <div className="file-upload flexx" style={{ alignItems: "center" }}>
              <label
                className="flexx"
                style={{ flexDirection: "column", alignItems: "center" }}
                for="custom-file"
              >
                <Button onClick={handleClick} component="span">
                  <img src={fileUpload} />
                </Button>
                <p className="greyed">PDF, JPEG, PNG, SVG</p>
              </label>
              <p>Upload your Association Logo</p>
            </div>
            <input
              style={{ marginBottom: "20px" }}
              id="custom-file"
              name="logoFile"
              type="file"
              ref={hiddenFileInput}
            />

            {/* <div className="file-upload">
              <label className="flexx">Upload your Association Logo</label>
              <input
                name="file-logo"
                onChange={(event) => this.handleCompressedUpload(event)}
                type="file"
              />
            </div> */}
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="col coll">
            <div className="row">
              <label className="flexx" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                title="Email"
                type="email"
                placeholder="Type Here..."
                {...register("email", { required: true, maxLength: 100 })}
              />
            </div>
            <div className="row">
              <label className="flexx" htmlFor="nationality">
                Nationality
              </label>
              <select {...register("nationality", { required: true })}>
                <option label="Choose..."></option>
                <option value="Afghanistan">Afghanistan</option>
                <option value=" Albania"> Albania</option>
                <option value=" Algeria"> Algeria</option>
                <option value=" American Samoa"> American Samoa</option>
                <option value=" Andorra"> Andorra</option>
                <option value=" Angola"> Angola</option>
                <option value=" Anguilla"> Anguilla</option>
                <option value=" Antarctica"> Antarctica</option>
                <option value=" Antigua and Barbuda">
                  {" "}
                  Antigua and Barbuda
                </option>
                <option value=" Argentina"> Argentina</option>
                <option value=" Armenia"> Armenia</option>
                <option value=" Aruba"> Aruba</option>
                <option value=" Australia"> Australia</option>
                <option value=" Austria"> Austria</option>
                <option value=" Azerbaijan"> Azerbaijan</option>
                <option value=" Bahamas"> Bahamas</option>
                <option value=" Bahrain"> Bahrain</option>
                <option value=" Bangladesh"> Bangladesh</option>
                <option value=" Barbados"> Barbados</option>
                <option value=" Belarus"> Belarus</option>
                <option value=" Belgium"> Belgium</option>
                <option value=" Belize"> Belize</option>
                <option value=" Benin"> Benin</option>
                <option value=" Bermuda"> Bermuda</option>
                <option value=" Bhutan"> Bhutan</option>
                <option value=" Bolivia"> Bolivia</option>
                <option value=" Bosnia and Herzegovina">
                  {" "}
                  Bosnia and Herzegovina
                </option>
                <option value=" Botswana"> Botswana</option>
                <option value=" Bouvet Island"> Bouvet Island</option>
                <option value=" Brazil"> Brazil</option>
                <option value=" British Indian Ocean Territory">
                  {" "}
                  British Indian Ocean Territory
                </option>
                <option value=" Brunei Darussalam"> Brunei Darussalam</option>
                <option value=" Bulgaria"> Bulgaria</option>
                <option value=" Burkina Faso"> Burkina Faso</option>
                <option value=" Burundi"> Burundi</option>
                <option value=" Cambodia"> Cambodia</option>
                <option value=" Cameroon"> Cameroon</option>
                <option value=" Canada"> Canada</option>
                <option value=" Cape Verde"> Cape Verde</option>
                <option value=" Cayman Islands"> Cayman Islands</option>
                <option value=" Central African Republic">
                  {" "}
                  Central African Republic
                </option>
                <option value=" Chad"> Chad</option>
                <option value=" Chile"> Chile</option>
                <option value=" China"> China</option>
                <option value=" Christmas Island"> Christmas Island</option>
                <option value=" Cocos (Keeling Islands)">
                  {" "}
                  Cocos (Keeling Islands)
                </option>
                <option value=" Colombia"> Colombia</option>
                <option value=" Comoros"> Comoros</option>
                <option value=" Congo"> Congo</option>
                <option value=" Cook Islands"> Cook Islands</option>
                <option value=" Costa Rica"> Costa Rica</option>
                <option value=" Cote D'Ivoire (Ivory Coast)">
                  {" "}
                  Cote D'Ivoire (Ivory Coast)
                </option>
                <option value=" Croatia (Hrvatska"> Croatia (Hrvatska</option>
                <option value=" Cuba"> Cuba</option>
                <option value=" Cyprus"> Cyprus</option>
                <option value=" Czech Republic"> Czech Republic</option>
                <option value=" Denmark"> Denmark</option>
                <option value=" Djibouti"> Djibouti</option>
                <option value=" Dominica"> Dominica</option>
                <option value=" Dominican Republic"> Dominican Republic</option>
                <option value=" East Timor"> East Timor</option>
                <option value=" Ecuador"> Ecuador</option>
                <option value=" Egypt"> Egypt</option>
                <option value=" El Salvador"> El Salvador</option>
                <option value=" Equatorial Guinea"> Equatorial Guinea</option>
                <option value=" Eritrea"> Eritrea</option>
                <option value=" Estonia"> Estonia</option>
                <option value=" Ethiopia"> Ethiopia</option>
                <option value=" Falkland Islands (Malvinas)">
                  {" "}
                  Falkland Islands (Malvinas)
                </option>
                <option value=" Faroe Islands"> Faroe Islands</option>
                <option value=" Fiji"> Fiji</option>
                <option value=" Finland"> Finland</option>
                <option value=" France"> France</option>
                <option value=" France"> France</option>
                <option value=" Metropolitan"> Metropolitan</option>
                <option value=" French Guiana"> French Guiana</option>
                <option value=" French Polynesia"> French Polynesia</option>
                <option value=" French Southern Territories">
                  {" "}
                  French Southern Territories
                </option>
                <option value=" Gabon"> Gabon</option>
                <option value=" Gambia"> Gambia</option>
                <option value=" Georgia"> Georgia</option>
                <option value=" Germany"> Germany</option>
                <option value=" Ghana"> Ghana</option>
                <option value=" Gibraltar"> Gibraltar</option>
                <option value=" Greece"> Greece</option>
                <option value=" Greenland"> Greenland</option>
                <option value=" Grenada"> Grenada</option>
                <option value=" Guadeloupe"> Guadeloupe</option>
                <option value=" Guam"> Guam</option>
                <option value=" Guatemala"> Guatemala</option>
                <option value=" Guinea"> Guinea</option>
                <option value=" Guinea-Bissau"> Guinea-Bissau</option>
                <option value=" Guyana"> Guyana</option>
                <option value=" Haiti"> Haiti</option>
                <option value=" Heard and McDonald Islands">
                  {" "}
                  Heard and McDonald Islands
                </option>
                <option value=" Honduras"> Honduras</option>
                <option value=" Hong Kong"> Hong Kong</option>
                <option value=" Hungary"> Hungary</option>
                <option value=" Iceland"> Iceland</option>
                <option value=" India"> India</option>
                <option value=" Indonesia"> Indonesia</option>
                <option value=" Iran"> Iran</option>
                <option value=" Iraq"> Iraq</option>
                <option value=" Ireland"> Ireland</option>
                <option value=" Israel"> Israel</option>
                <option value=" Italy"> Italy</option>
                <option value=" Jamaica"> Jamaica</option>
                <option value=" Japan"> Japan</option>
                <option value=" Jordan"> Jordan</option>
                <option value=" Kazakhstan"> Kazakhstan</option>
                <option value=" Kenya"> Kenya</option>
                <option value=" Kiribati"> Kiribati</option>
                <option value=" Korea (North)"> Korea (North)</option>
                <option value=" Korea (South)"> Korea (South)</option>
                <option value=" Kuwait"> Kuwait</option>
                <option value=" Kyrgyzstan"> Kyrgyzstan</option>
                <option value=" Laos"> Laos</option>
                <option value=" Latvia"> Latvia</option>
                <option value=" Lebanon"> Lebanon</option>
                <option value=" Lesotho"> Lesotho</option>
                <option value=" Liberia"> Liberia</option>
                <option value=" Libya"> Libya</option>
                <option value=" Liechtenstein"> Liechtenstein</option>
                <option value=" Lithuania"> Lithuania</option>
                <option value=" Luxembourg"> Luxembourg</option>
                <option value=" Macau"> Macau</option>
                <option value=" Macedonia"> Macedonia</option>
                <option value=" Madagascar"> Madagascar</option>
                <option value=" Malawi"> Malawi</option>
                <option value=" Malaysia"> Malaysia</option>
                <option value=" Maldives"> Maldives</option>
                <option value=" Mali"> Mali</option>
                <option value=" Malta"> Malta</option>
                <option value=" Marshall Islands"> Marshall Islands</option>
                <option value=" Martinique"> Martinique</option>
                <option value=" Mauritania"> Mauritania</option>
                <option value=" Mauritius"> Mauritius</option>
                <option value=" Mayotte"> Mayotte</option>
                <option value=" Mexico"> Mexico</option>
                <option value=" Micronesia"> Micronesia</option>
                <option value=" Moldova"> Moldova</option>
                <option value=" Monaco"> Monaco</option>
                <option value=" Mongolia"> Mongolia</option>
                <option value=" Montserrat"> Montserrat</option>
                <option value=" Morocco"> Morocco</option>
                <option value=" Mozambique"> Mozambique</option>
                <option value=" Myanmar"> Myanmar</option>
                <option value=" Namibia"> Namibia</option>
                <option value=" Nauru"> Nauru</option>
                <option value=" Nepal"> Nepal</option>
                <option value=" Netherlands"> Netherlands</option>
                <option value=" Netherlands Antilles">
                  {" "}
                  Netherlands Antilles
                </option>
                <option value=" New Caledonia"> New Caledonia</option>
                <option value=" New Zealand"> New Zealand</option>
                <option value=" Nicaragua"> Nicaragua</option>
                <option value=" Niger"> Niger</option>
                <option value=" Nigeria"> Nigeria</option>
                <option value=" Niue"> Niue</option>
                <option value=" Norfolk Island"> Norfolk Island</option>
                <option value=" Northern Mariana Islands">
                  {" "}
                  Northern Mariana Islands
                </option>
                <option value=" Norway"> Norway</option>
                <option value=" Oman"> Oman</option>
                <option value=" Pakistan"> Pakistan</option>
                <option value=" Palau"> Palau</option>
                <option value=" Palau"> Palestine</option>
                <option value=" Panama"> Panama</option>
                <option value=" Papua New Guinea"> Papua New Guinea</option>
                <option value=" Paraguay"> Paraguay</option>
                <option value=" Peru"> Peru</option>
                <option value=" Philippines"> Philippines</option>
                <option value=" Pitcairn"> Pitcairn</option>
                <option value=" Poland"> Poland</option>
                <option value=" Portugal"> Portugal</option>
                <option value=" Puerto Rico"> Puerto Rico</option>
                <option value=" Qatar"> Qatar</option>
                <option value=" Reunion"> Reunion</option>
                <option value=" Romania"> Romania</option>
                <option value=" Russian Federation"> Russian Federation</option>
                <option value=" Rwanda"> Rwanda</option>
                <option value=" Saint Kitts and Nevis">
                  {" "}
                  Saint Kitts and Nevis
                </option>
                <option value=" Saint Lucia"> Saint Lucia</option>
                <option value=" Saint Vincent and The Grenadines">
                  {" "}
                  Saint Vincent and The Grenadines
                </option>
                <option value=" Samoa"> Samoa</option>
                <option value=" San Marino"> San Marino</option>
                <option value=" Sao Tome and Principe">
                  {" "}
                  Sao Tome and Principe
                </option>
                <option value=" Saudi Arabia"> Saudi Arabia</option>
                <option value=" Senegal"> Senegal</option>
                <option value=" Seychelles"> Seychelles</option>
                <option value=" Sierra Leone"> Sierra Leone</option>
                <option value=" Singapore"> Singapore</option>
                <option value=" Slovak Republic"> Slovak Republic</option>
                <option value=" Slovenia"> Slovenia</option>
                <option value=" Solomon Islands"> Solomon Islands</option>
                <option value=" Somalia"> Somalia</option>
                <option value=" South Africa"> South Africa</option>
                <option value=" S. Georgia and S. Sandwich Isls.">
                  {" "}
                  S. Georgia and S. Sandwich Isls.
                </option>
                <option value=" Spain"> Spain</option>
                <option value=" Sri Lanka"> Sri Lanka</option>
                <option value=" St. Helena"> St. Helena</option>
                <option value=" St. Pierre and Miquelon">
                  {" "}
                  St. Pierre and Miquelon
                </option>
                <option value=" Sudan"> Sudan</option>
                <option value=" Suriname"> Suriname</option>
                <option value=" Svalbard and Jan Mayen Islands">
                  {" "}
                  Svalbard and Jan Mayen Islands
                </option>
                <option value=" Swaziland"> Swaziland</option>
                <option value=" Sweden"> Sweden</option>
                <option value=" Switzerland"> Switzerland</option>
                <option value=" Syria"> Syria</option>
                <option value=" Taiwan"> Taiwan</option>
                <option value=" Tajikistan"> Tajikistan</option>
                <option value=" Tanzania"> Tanzania</option>
                <option value=" Thailand"> Thailand</option>
                <option value=" Togo"> Togo</option>
                <option value=" Tokelau"> Tokelau</option>
                <option value=" Tonga"> Tonga</option>
                <option value=" Trinidad and Tobago">
                  {" "}
                  Trinidad and Tobago
                </option>
                <option value=" Tunisia"> Tunisia</option>
                <option value=" Turkey"> Turkey</option>
                <option value=" Turkmenistan"> Turkmenistan</option>
                <option value=" Turks and Caicos Islands">
                  {" "}
                  Turks and Caicos Islands
                </option>
                <option value=" Tuvalu"> Tuvalu</option>
                <option value=" Uganda"> Uganda</option>
                <option value=" Ukraine"> Ukraine</option>
                <option value=" United Arab Emirates">
                  {" "}
                  United Arab Emirates
                </option>
                <option value=" United Kingdom (Britain / UK)">
                  {" "}
                  United Kingdom (Britain / UK)
                </option>
                <option value=" United States of America (USA)">
                  {" "}
                  United States of America (USA)
                </option>
                <option value=" US Minor Outlying Islands">
                  {" "}
                  US Minor Outlying Islands
                </option>
                <option value=" Uruguay"> Uruguay</option>
                <option value=" Uzbekistan"> Uzbekistan</option>
                <option value=" Vanuatu"> Vanuatu</option>
                <option value=" Vatican City State (Holy See)">
                  {" "}
                  Vatican City State (Holy See)
                </option>
                <option value=" Venezuela"> Venezuela</option>
                <option value=" Viet Nam"> Viet Nam</option>
                <option value=" Virgin Islands (British)">
                  {" "}
                  Virgin Islands (British)
                </option>
                <option value=" Virgin Islands (US)">
                  {" "}
                  Virgin Islands (US)
                </option>
                <option value=" Wallis and Futuna Islands">
                  {" "}
                  Wallis and Futuna Islands
                </option>
                <option value=" Western Sahara"> Western Sahara</option>
                <option value=" Yemen"> Yemen</option>
                <option value=" Yugoslavia"> Yugoslavia</option>
                <option value=" Zaire"> Zaire</option>
                <option value=" Zambia"> Zambia</option>
                <option value=" Zimbabwe"> Zimbabwe</option>
              </select>
            </div>
            <div className="row">
              <label className="flexx" htmlFor="yearStudies">
                Years of Study
              </label>
              <select
                id="yearsStudy"
                {...register("yearStudies", { required: true })}
              >
                <option label="Choose..."></option>
                <option label="Choose..."></option>
                <option value="Year 1">Year 1</option>
                <option value="Year 2">Year 2</option>
                <option value="Year 3">Year 3</option>
                <option value="Year 4">Year 4</option>
                <option value="Year 5">Year 5</option>
                <option value="Year 6">Year 6</option>
                <option value="Intern">Intern</option>
                <option value="Graduate">Graduate</option>
              </select>
            </div>
            <div className="row">
              <label className="flexx" htmlFor="region">
                Region
              </label>
              <select {...register("region", { required: true })}>
                <option label="Choose..."></option>
                <option value="Africa">Africa</option>
                <option value=" Pacific Asia"> Pacific Asia</option>
                <option value=" Americas"> Americas</option>
                <option value=" Europe"> Europe</option>
                <option value=" Middle East"> Middle East</option>
              </select>
            </div>
            <div className="row">
              <div className="flexx">
                <label htmlFor="standing" style={{ marginRight: "20px" }}>
                  Are you in good standing for the year 2022?
                </label>
                <input
                  id="standing"
                  {...register("standing", {
                    required: true,
                  })}
                  type="radio"
                  value="Yes"
                />
                Yes
                <input
                  style={{ marginLeft: "10px" }}
                  {...register("standing", {
                    required: true,
                  })}
                  type="radio"
                  value=" No"
                />
                No
              </div>
            </div>
            <div className="row">
              <label className="flexx" htmlFor="insta">
                Instagram Account
              </label>
              <input
                id="insta"
                type="text"
                placeholder="Type Here..."
                {...register("instagram", { required: true })}
              />
            </div>
            <div className="row">
              <div className="flexx">
                <label className="flexx" htmlFor="delegateBoolean">
                  Are you the delegate of your affiliated association?
                </label>
                <input
                  name="delegateBoolean"
                  id="delegateBoolean"
                  {...register("delegateBoolean", {
                    required: true,
                  })}
                  type="radio"
                  value="Yes"
                />{" "}
                Yes
                <input
                  style={{ marginLeft: "10px" }}
                  {...register("delegateBoolean", {
                    required: true,
                  })}
                  type="radio"
                  value=" No"
                />
                No
              </div>
            </div>
            <div className="row">
              <label className="flexx" htmlFor="branch">
                If not, what is your position in the association?
              </label>
              <input
                id="branch"
                type="text"
                placeholder="Type Here..."
                {...register("branchPosition", {})}
              />
            </div>
          </div>
          <div className="row">
            <div className="flexx" style={{ marginTop: "50px" }}>
              <input
                style={{ marginRight: "10px" }}
                id="disclosure"
                type="checkbox"
                placeholder="Type Here..."
                {...register("disclosure", { required: true })}
              />
              <label htmlFor="disclosure" style={{ marginLeft: "0px" }}>
                I shall not disclose any confidential information related to
                this project until further notice.
              </label>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="flexx">
              <input
                style={{ marginRight: "10px" }}
                id="permission"
                type="checkbox"
                placeholder="Type Here..."
                {...register("permission", { required: true })}
              />
              <label
                style={{ marginLeft: "0px", textAlign: "left" }}
                htmlFor="permission"
              >
                I understand that it is not permissible to use Logos or Elements
                pertaining to this project elsewhere unless a prior permission
                is granted.
              </label>
            </div>
          </div>
          <div className="row">
            <div className="flexx">
              <input
                style={{ marginRight: "10px" }}
                id="expOfInterest"
                type="checkbox"
                placeholder="Type Here..."
                {...register("expOfInterest", { required: true })}
              />
              <label
                htmlFor="expOfInterest"
                style={{ marginLeft: "0px", textAlign: "left" }}
              >
                I declare my association’s expression of interest to officially
                participate in IADS international grand idea competition in
                partnership with Colgate-Palmolive®.
              </label>
            </div>
          </div>

          {/*<input type="checkbox" placeholder="I understand that it is not permissible to use Logos or Elements pertaining to this project elsewhere unless a prior permission is granted." {...register("I understand that it is not permissible to use Logos or Elements pertaining to this project elsewhere unless a prior permission is granted.", {required: true})} />
      <input type="checkbox" placeholder="In accordance with the above, freely, priorly, expressly and voluntarily AUTHORIZE to Internation Association of Dental Students (IADS) to process my personal data, and for the purposes related to its social purpose and in particular for the legal, contractual and commercial purposes described in the Associaiton’s General Data Protection Regulation. The information obtained for the Processing of my personal data has been provided voluntarily and is true." {...register("In accordance with the above, freely, priorly, expressly and voluntarily AUTHORIZE to Internation Association of Dental Students (IADS) to process my personal data, and for the purposes related to its social purpose and in particular for the legal, contractual and commercial purposes described in the Associaiton’s General Data Protection Regulation. The information obtained for the Processing of my personal data has been provided voluntarily and is true.", {required: true})} />
      <input type="checkbox" placeholder="I declare my association’s expression of interest to officially participate in IADS international grand idea competition in partnership with Colgate-Palmolive®.  " {...register("I declare my association’s expression of interest to officially participate in IADS international grand idea competition in partnership with Colgate-Palmolive®.  ", {required: true})} /> */}
        </div>
        <input type="submit" />
      </form>
    </>
  );
};

export default ColgateForm;
