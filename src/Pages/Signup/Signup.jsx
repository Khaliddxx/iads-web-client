import React from "react";
import { useForm } from "react-hook-form";
import "./Signup.scss";
import { useHttpClient } from "../../Shared/http-hook";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Audio } from "react-loader-spinner";
import emailjs from "emailjs-com";
import backend from "../../utils/backend";

export default function Signup() {
  const navigate = useNavigate();
  const httpClient = useHttpClient();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    setLoading(true);
    if (data.iadsMember === "No") {
      alert(
        "Please apply as a member through membership page. We will inform you once it's live!"
      );
    } else {
      try {
        // emailjs
        //   .sendForm(
        //     "service_y75hwxc",
        //     "template_wc3azp7",
        //     e.target,
        //     "Blp53EzBsHt7ji3lO"
        //   )
        //   .then(
        //     (result) => {
        //       console.log(e.target);
        //     },
        //     (error) => {
        //       console.log(error);
        //       return;
        //     }
        //   );
        // emailjs
        //   .sendForm(
        //     "service_y75hwxc",
        //     "template_gn7f4vy",
        //     e.target,
        //     "Blp53EzBsHt7ji3lO"
        //   )
        //   .then(
        //     (result) => {
        //       console.log(e.target);
        //     },
        //     (error) => {
        //       console.log(error);
        //       return;
        //     }
        //   );

        const response = await httpClient.sendRequest(
          `${backend}api/webUsers/signup`,
          "POST",
          JSON.stringify({
            data,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        alert(
          "Successfully signed up, we will validate your account within 2 to 3 days!"
        );
        setLoading(false);
        e.target.reset();
        navigate("/home");
      } catch (err) {
        console.log(httpClient.error);
      }
    }

    console.log(data);
  };
  console.log(errors);

  return (
    <form
      className="container-fluid signup-page"
      onSubmit={handleSubmit(onSubmit)}
    >
      {loading && (
        <div className="loading">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="red"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
          <p
            style={{
              fontFamily: "POPPINS bold",
              color: "white",
              marginTop: "20px",
            }}
          >
            Please Wait...
          </p>
        </div>
      )}
      <div className="form">
        <h1 className="title">IADS account registration form</h1>
        <div className="row">
          <p
            className="desc"
            style={{ paddingBottom: "25px", borderBottom: "1px solid #C6C6C6" }}
          >
            You need to be an IADS member to sign up. If you are not a member,
            please apply through our{" "}
            <a
              style={{ fontFamily: "Poppins bold", textDecoration: "none" }}
              href="/membership"
            >
              membership portal.
            </a>
          </p>
          <div className="col-sm-12 col-lg-6 flexx">
            <label>User Name*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="username"
              {...register("username", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-lg-6 flexx">
            <label>Personal Email Address*</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="email"
              {...register("email", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-6 flexx">
            <label>Password*</label>
            <input
              type="password"
              placeholder="Type Here..."
              id="password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-lg-6 flexx">
            <label>Confirm Password*</label>
            <input
              type="password"
              placeholder="Type Here..."
              id="password"
              {...register("password", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-6 flexx">
            <label>Full Name*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="fullName"
              {...register("fullName", { required: true })}
            />
          </div>
          <div className="col-sm-12 col-lg-6 flexx">
            <label>Gender</label>
            <select {...register("gender", { required: true })}>
              <option label="Choose..."></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div
          className="row"
          style={{ borderBottom: "1px solid grey", paddingBottom: "20px" }}
        >
          <div className="col-sm-12 col-lg-6 flexx">
            <label>Country*</label>
            <select id="country" {...register("country", { required: true })}>
              <option label="Choose..."></option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="The Bahamas">The Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegovina">
                Bosnia and Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cabo Verde">Cabo Verde</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo, Democratic Republic of the">
                Congo, Democratic Republic of the
              </option>
              <option value="Congo, Republic of the">
                Congo, Republic of the
              </option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Côte d’Ivoire">Côte d’Ivoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="East Timor (Timor-Leste)">
                East Timor (Timor-Leste)
              </option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Eswatini">Eswatini</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="Gabon">Gabon</option>
              <option value="The Gambia">The Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Greece">Greece</option>
              <option value="Grenada">Grenada</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Honduras">Honduras</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea, North">Korea, North</option>
              <option value="Korea, South">Korea, South</option>
              <option value="Kosovo">Kosovo</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Laos">Laos</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia, Federated States of">
                Micronesia, Federated States of
              </option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar (Burma)">Myanmar (Burma)</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="North Macedonia">North Macedonia</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palestine">Palestine</option>
              <option value="Palau">Palau</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Qatar">Qatar</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Kitts and Nevis">
                Saint Kitts and Nevis
              </option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Vincent and the Grenadines">
                Saint Vincent and the Grenadines
              </option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">
                Sao Tome and Principe
              </option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Sudan, South">Sudan, South</option>
              <option value="Suriname">Suriname</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syria">Syria</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Togo">Togo</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vatican City">Vatican City</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
          </div>
          <div className="col-sm-12 col-lg-6 flexx">
            <label>Phone Number*</label>
            <input
              type="tel"
              placeholder="Type Here..."
              id="phone"
              {...register("phone", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-6 flexx">
            <label>Name of University*</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="uni"
              {...register("uni", { required: true })}
            />
          </div>

          <div className="col-sm-12 col-lg-6 flexx">
            <label>IADS member association you’re affiliated to*</label>

            <select
              id="associations"
              {...register("associations", { required: true })}
            >
              <option label="Choose..."></option>
              <option value="Bangladesh - Dhaka Dental College Debating & Quiz Society">
                Bangladesh - Dhaka Dental College Debating & Quiz Society
              </option>
              <option value="Burkina Faso - Association des Étudiants en Chirurgie Dentaire du Burkina Faso">
                Burkina Faso - Association des Étudiants en Chirurgie Dentaire
                du Burkina Faso
              </option>
              <option value="Chile - Asociacion Nacional Científica de Estudiantes de Odontología">
                Chile - Asociacion Nacional Científica de Estudiantes de
                Odontología
              </option>
              <option value="Croatian Association of Dental Student for International Activities and Exchange">
                Croatian Association of Dental Student for International
                Activities and Exchange
              </option>
              <option value="Czech Association of Dental Students ">
                Czech Association of Dental Students{" "}
              </option>
              <option value="Ecuador - School Association of the Faculty of Dentistry - University of Cuenca">
                Ecuador - School Association of the Faculty of Dentistry -
                University of Cuenca
              </option>
              <option value="Egyptian Association of Dental Students">
                Egyptian Association of Dental Students
              </option>
              <option value="Egypt - Dental Students’ Scientific Association of Egypt (DSSR)">
                Egypt - Dental Students’ Scientific Association of Egypt (DSSR)
              </option>
              <option value="Fiji Dental Students' Association">
                Fiji Dental Students' Association
              </option>
              <option value="Finnish Dental Students' Association">
                Finnish Dental Students' Association
              </option>
              <option value="France - UNECD">France - UNECD</option>
              <option value="Germany - Zahnmedizinischer Austauschdienst">
                Germany - Zahnmedizinischer Austauschdienst
              </option>
              <option value="Guatemala - Association of Dental Students of the University of San Carlos of Guatemala ">
                Guatemala - Association of Dental Students of the University of
                San Carlos of Guatemala{" "}
              </option>
              <option value="Indian Association of Dental Students">
                Indian Association of Dental Students
              </option>
              <option value="Indonesian Association of Dental Students">
                Indonesian Association of Dental Students
              </option>
              <option value="Iran - Dental Students' Scientific Research Center">
                Iran - Dental Students' Scientific Research Center
              </option>
              <option value="Iraqi Dental Students Association ">
                Iraqi Dental Students Association{" "}
              </option>
              <option value="Italian Dental Student Association">
                Italian Dental Student Association
              </option>
              <option value="Ivory Coast - National Organization of Health Sciences Students' - Odontostomatologie">
                Ivory Coast - National Organization of Health Sciences Students'
                - Odontostomatologie
              </option>
              <option value="Japan Dental Students Association">
                Japan Dental Students Association
              </option>
              <option value="Jordanian association of dental students ">
                Jordanian association of dental students{" "}
              </option>
              <option value="Kazakhstan Association of Dental Youth ">
                Kazakhstan Association of Dental Youth{" "}
              </option>
              <option value="Latvian Dental Students’ Association">
                Latvian Dental Students’ Association
              </option>
              <option value="Lebanese Association of Dental Students">
                Lebanese Association of Dental Students
              </option>
              <option value="Lithuanian Dental Students' association">
                Lithuanian Dental Students' association
              </option>
              <option value="Malaysian Dental Students’ Association ">
                Malaysian Dental Students’ Association{" "}
              </option>
              <option value="Mexican Organization of Oral Health Students">
                Mexican Organization of Oral Health Students
              </option>
              <option value="Moldovan Dental Students' Association">
                Moldovan Dental Students' Association
              </option>
              <option value="Morocco - UM6smile creators association ">
                Morocco - UM6smile creators association{" "}
              </option>
              <option value="Northern Cyprus Association of Dental Students">
                Northern Cyprus Association of Dental Students
              </option>
              <option value="Pakistan Association of Dental Students ">
                Pakistan Association of Dental Students{" "}
              </option>
              <option value="Palestinian Association of Dental Students ">
                Palestinian Association of Dental Students{" "}
              </option>
              <option value="Polish Association of Dental Students">
                Polish Association of Dental Students
              </option>
              <option value="Portuguese Dental Student's Association">
                Portuguese Dental Student's Association
              </option>
              <option value="Qatar Dental Students’ Association">
                Qatar Dental Students’ Association
              </option>
              <option value="Romania - Bucharest Dental Students’ Association (LSMDB)">
                Romania - Bucharest Dental Students’ Association (LSMDB)
              </option>
              <option value="Romania - The Society of Dental Students Iasi">
                Romania - The Society of Dental Students Iasi
              </option>
              <option value="Russia - National Medical Students' State">
                Russia - National Medical Students' State
              </option>
              <option value="Rwanda Dental Students Association">
                Rwanda Dental Students Association
              </option>
              <option value="Slovak association of dental students">
                Slovak association of dental students
              </option>
              <option value="Slovenian Dental Students International Committee">
                Slovenian Dental Students International Committee
              </option>
              <option value="Sudanese association of dental students ">
                Sudanese association of dental students{" "}
              </option>
              <option value="Swedish Dental Association ">
                Swedish Dental Association{" "}
              </option>
              <option value="Taiwan Dental Student Association ">
                Taiwan Dental Student Association{" "}
              </option>
              <option value="Thailand - Dental Students’ Association of Thailand">
                Thailand - Dental Students’ Association of Thailand
              </option>
              <option value="Tunisian Association of Dental Students">
                Tunisian Association of Dental Students
              </option>
              <option value="Turkish Dental Students International Committee (TDB)">
                Turkish Dental Students International Committee (TDB)
              </option>
              <option value="Uganda - Makarere University Dental Students' Association">
                Uganda - Makarere University Dental Students' Association
              </option>
              <option value="Ukraine - Medical Students' Union">
                Ukraine - Medical Students' Union
              </option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-6 flexx">
            <label>Year of Study*</label>

            <select
              id="yearsOfStudy"
              {...register("yearsOfStudy", { required: true })}
            >
              <option label="Choose..."></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="Internship">Internship</option>
              <option value="Graduated">Graduated</option>
            </select>
          </div>

          <div className="col-sm-12 col-lg-6 flexx">
            <div
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <label style={{ marginBottom: "15px" }}>
                Are you the delegate of your affiliated association?*
              </label>
              <input
                style={{ marginLeft: "15px", marginRight: "10px" }}
                id="delegate"
                {...register("delegate", { required: true })}
                type="radio"
                value="Yes"
              />
              Yes
              <input
                style={{ marginLeft: "20px", marginRight: "10px" }}
                id="delegate"
                {...register("delegate", { required: true })}
                type="radio"
                value="No"
              />
              No
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-6 flexx">
            <label>Year of Graduation*</label>
            <input
              type="number"
              placeholder="Type Here..."
              id="gradYear"
              {...register("gradYear", { required: true })}
            />
          </div>

          <div className="col-sm-12 col-lg-6 flexx">
            <div
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <label style={{ marginBottom: "15px" }}>
                Are you currently employed in IADS?*
              </label>
              <input
                style={{ marginLeft: "15px", marginRight: "10px" }}
                id="iadsEmployed"
                {...register("iadsEmployed", { required: true })}
                type="radio"
                value="Yes"
              />
              Yes
              <input
                style={{ marginLeft: "20px", marginRight: "10px" }}
                id="iadsEmployed"
                {...register("iadsEmployed", { required: true })}
                type="radio"
                value="No"
              />
              No
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-6 flexx align-items-center">
            <label>
              Please Send your proof of studentship or graduation to{" "}
              <a href="mailto:vpia@iads-web.org">vpia@iads-web.org</a>
            </label>
            {/* <input
              name="proof"
              type="file"
              style={{ border: "none", marginTop: "10px" }}
            /> */}
          </div>
          <div className="col-sm-12 col-lg-6 flexx">
            <label>If Currently Employed, What is your position?</label>
            <input
              type="text"
              placeholder="Type Here..."
              id="iadsPosition"
              {...register("iadsPosition", { required: false })}
            />
          </div>
        </div>

        <div
          className="row"
          style={{ paddingBottom: "25px", borderBottom: "1px solid #C6C6C6" }}
        >
          <div className="col-sm-12 col-lg-6 flexx">
            <div
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <label style={{ marginBottom: "15px" }}>
                Are you an IADS member?*
              </label>
              <input
                style={{ marginLeft: "15px", marginRight: "10px" }}
                id="iadsMember"
                {...register("iadsMember", { required: true })}
                type="radio"
                value="Yes"
              />
              Yes
              <input
                style={{ marginLeft: "20px", marginRight: "10px" }}
                id="iadsMember"
                {...register("iadsMember", { required: true })}
                type="radio"
                value="No"
              />
              No
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 flexx">
            <label>If applicable, enter your IADS domain email</label>
            <input
              type="email"
              placeholder="Type Here..."
              id="iadsEmail"
              {...register("iadsEmail", { required: false })}
            />
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col d-flex justify-content-start align-items-start">
              <input
                className="small-check"
                type="checkbox"
                placeholder="declare"
                {...register("declare", { required: true })}
              />
              <p style={{ textAlign: "left", margin: "0px" }}>
                I declare that all information provided above is correct.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-start align-items-start">
              <input
                className="small-check"
                type="checkbox"
                placeholder="understand1"
                {...register("understand1", { required: true })}
              />
              <p style={{ textAlign: "left", margin: "0px" }}>
                I understand that if I am not an IADS member, I shall apply for
                personal membership in order for <br /> my account to be
                activated and verified.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-start align-items-start">
              <input
                className="small-check"
                type="checkbox"
                placeholder="understand2"
                {...register("understand2", { required: true })}
              />
              <p style={{ textAlign: "left", margin: "0px" }}>
                I understand and agree to the{" "}
                <a href="https://drive.google.com/file/d/1b9O8TAlQ7jkeFetrC0SgC8fVuhJkWRks/view?usp=sharing">
                  {" "}
                  Terms & Conditions
                </a>{" "}
                as a user of this website.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-start align-items-start">
              <input
                className="small-check"
                type="checkbox"
                placeholder="confirm"
                {...register("confirm", { required: true })}
              />
              <p style={{ textAlign: "left", margin: "0px" }}>
                I confirm that I have read and understood IADS{" "}
                <a href="https://drive.google.com/file/d/1b9O8TAlQ7jkeFetrC0SgC8fVuhJkWRks/view?usp=sharing">
                  Code of Conduct
                </a>{" "}
                and I declare that I am fully responsible and to be held
                accountable for my behaviour on this website on behalf of myself
                and the organisation I am a member of, and that in no way will I
                discriminate or pose a threat to any users and IADS official’s
                civil rights. I declare that I understand any breach of these
                rules is grounds for being reported to the Triple C and I will
                be subjected to disciplinary sanctions.
              </p>
            </div>
          </div>
        </div>
        <p style={{ color: "red" }}>{httpClient.error}</p>
        <input type="submit" className="submit-btn" />
      </div>
    </form>
  );
}
