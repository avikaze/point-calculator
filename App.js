import React from "react";
import "./App.css";

/*
 Steps:
  - Define your todos state
  - Make sure the state is reflected in the ul
  - get the add todo form working
  - add the checked and delete buttons 
  - get the checked and delete buttons working
  - get the items left and clear buttons working
  - get the active view buttons working
  - only show the right todo items for the current active view
 */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      activeView: "All",
      todos: [],

      //Points calc porps!
      fAge: "0",
      fEng: "0",
      fOffEmp: "0",
      fOnEmp: "0",
      fEduQ: "0",
      fAuStud: "0",
      fSpecEd: "0",
      fCommLang: "0",
      fRegStud: "0",
      fPartnerSkill: "0",
      fProfYear: "0",
      fPointsTotal: ""
    };
  }
  render() {
    const {
      todos,
      inputValue,
      activeView,
      fAge,
      fEng,
      fOffEmp,
      fOnEmp,
      fEduQ,
      fAuStud,
      fSpecEd,
      fCommLang,
      fRegStud,
      fPartnerSkill,
      fProfYear
    } = this.state;

    let fPointsTotal1 =
      parseInt(fAge) +
      parseInt(fEng) +
      parseInt(fOffEmp) +
      parseInt(fOnEmp) +
      parseInt(fEduQ);

    const itemsRemaining = todos.filter(todo => !todo.checked);

    const todoItems = todos.map((todo, i) => {
      const shouldShow =
        activeView === "All" ||
        (activeView === "Completed" && todo.checked) ||
        (activeView === "Active" && !todo.checked);

      if (!shouldShow) return null;

      return (
        <li key={i} className={todo.checked ? "checked" : ""}>
          <button
            className="check-button"
            onClick={() =>
              this.setState({
                todos: todos.map((currentTodo, currentIndex) =>
                  i !== currentIndex
                    ? currentTodo
                    : { ...todo, checked: !todo.checked }
                )
              })
            }
          >
            ✓
          </button>
          <button
            className="delete-button"
            onClick={() => {
              this.setState({
                todos: todos.filter(
                  (currentTodo, currentIndex) => i !== currentIndex
                )
              });
            }}
          >
            ×
          </button>
          <span>{todo.title}</span>
        </li>
      );
    });

    return (
      <div className="wrap">
        <div className="header">
          <div className="header-left">
            <h1>Points Calculator</h1>
          </div>
        </div>

        <form
          onSubmit={event => {
            event.preventDefault();
            this.setState({
              todos: [...todos, { title: inputValue, checked: false }],
              inputValue: ""
            });
          }}
        >
          {/* points calc start here */}
          <div>
            <h3>Select visa subclass</h3>
            <input
              type="radio"
              id="visa188"
              name="visa188"
              value="visa188"
              className="formRadio"
            />
            <label>
              Business Innovation and Investment (Provisional) visa (subclass
              188)
            </label>
            <br />

            <input
              checked
              type="radio"
              id="visa189"
              name="visa189"
              value="visa189"
              className="formRadio"
            />
            <label>Skilled Independent visa (subclass 189)</label>
            <br />
            <input
              type="radio"
              id="visa190"
              name="visa190"
              value="visa190"
              className="formRadio"
            />
            <label>Skilled Nominated visa(subclass 190)</label>
            <br />
            <input
              type="radio"
              id="visa489"
              name="visa489"
              value="visa489"
              className="formRadio"
            />
            <label>Skilled Regional (Provisional) visa (subclass 489)</label>
            <br />
          </div>

          <div>
            <h2>Skilled Independent visa (subclass 189) </h2>
            <p>
              To check how many points you might score use the{" "}
              <a href="">points table.</a>
            </p>
          </div>

          <div className="form_group">
            <h3>Age</h3>
            <p className="formElementQuestion">
              Which age band do you fit into?
              <span className="asterisk">*</span>
            </p>

            <select
              name="f_age"
              onChange={event => {
                this.setState({ fAge: event.target.value });
              }}
            >
              <option value="0"> --Please Select-- </option>/>
              <option value="25">at least 18 but less than 25 years</option>
              <option value="30">at least 25 but less than 33 years</option>
              <option value="25">at least 33 but less than 40 years</option>
              <option value="0">at least 40 but less than 45 years</option>
            </select>
          </div>

          <div className="form_group">
            <h3>English language requirements</h3>
            <p>
              Read the <a href="">English language skills</a> requirements.
            </p>
            <p className="formElementQuestion">
              How would you rate your English language ability?
              <span className="asterisk">*</span>
            </p>

            <select
              name="f_eng"
              onChange={event => {
                this.setState({ fEng: event.target.value });
              }}
            >
              <option value="0"> --Please Select-- </option>/>
              <option value="0">Competent English</option>
              <option value="10">Proficient English</option>
              <option value="20">Superior English</option>
            </select>
          </div>

          <div className="form_group">
            <h3>Skilled employment experience </h3>
            <p className="formElementQuestion">
              Overseas skilled employment – (outside Australia):
              <span className="asterisk">*</span>
            </p>

            <select
              name="fOffEmp"
              onChange={event => {
                this.setState({ fOffEmp: event.target.value });
              }}
            >
              <option value="0"> --Please Select-- </option>/>
              <option value="5">at least 3 but less than 5 years</option>
              <option value="10">at least 5 but less than 8 years</option>
              <option value="15">at least 8 years</option>
            </select>

            <p className="formElementQuestion">
              Australian Skilled Employment:
              <span className="asterisk">*</span>
            </p>

            <select
              name="fOnEmp"
              onChange={event => {
                this.setState({ fOnEmp: event.target.value });
              }}
            >
              <option value="0"> --Please Select-- </option>/>
              <option value="0">Less than 1 year</option>
              <option value="5">at least 1 but less than 3 years</option>
              <option value="5">at least 3 but less than 5 years</option>
              <option value="10">at least 5 but less than 8 years</option>
              <option value="15">at least 8 years</option>
            </select>
          </div>

          <div className="form_group">
            <h3>Education qualification </h3>
            <p className="formElementQuestion">
              What is your highest educational qualification?:
              <span className="asterisk">*</span>
            </p>

            <select
              name="fOnEmp"
              onChange={event => {
                this.setState({ fOnEmp: event.target.value });
              }}
            >
              <option value="0"> --Please Select-- </option>/>
              <option value="20">
                A Doctorate from an Australian educational institution or a
                Doctorate from another educational institution, that is of a
                recognised standard
              </option>
              <option value="15">
                At least a Bachelor degree from an Australian educational
                institution or at least a Bachelor qualification, from another
                educational institution, that is of a recognised standard
              </option>
              <option value="10">
                A diploma or trade qualification from an Australian educational
                institution
              </option>
              <option value="10">
                Attained a qualification or award recognised by the relevant
                assessing authority for your nominated skilled occupation as
                being suitable for that occupation
              </option>
              <option value="0">Not applicable</option>
            </select>
          </div>

          <div className="form_group">
            <h3>Australian study requirement </h3>
            <p className="formElementQuestion">
              Do you have at least 1 degree, diploma or trade qualification from
              an Australian educational institution that meets the Australian
              study requirement?
              <span className="asterisk">*</span>
            </p>

            <input
              type="radio"
              className="formRadio"
              value="5"
              onChange={event => {
                this.setState({ fAuStud: event.target.value });
              }}
            />
            <label>Yes</label>
            <br />

            <input
              type="radio"
              className="formRadio"
              value="0"
              onChange={event => {
                this.setState({ fAuStud: event.target.value });
              }}
            />
            <label>No</label>
          </div>

          <div className="form_group">
            <h3>Specialist education qualification</h3>
            <p className="formElementQuestion">
              Do you have a Masters degree by research or a Doctorate degree
              from an Australian educational institution that included at least
              2 academic years to in a relevant field?
              <span className="asterisk">*</span>
            </p>

            <input
              type="radio"
              className="formRadio"
              value="5"
              onChange={event => {
                this.setState({ fSpecEd: event.target.value });
              }}
            />
            <label>Yes</label>
            <br />

            <input
              type="radio"
              className="formRadio"
              value="0"
              onChange={event => {
                this.setState({ fSpecEd: event.target.value });
              }}
            />
            <label>No</label>
          </div>

          <div className="form_group">
            <h3>Credentialled community language</h3>
            <p className="formElementQuestion">
              Have you been accredited at the paraprofessional level or above,
              certified at the certified provisional level or above, or have a
              community language credential for interpreting or translating by
              the National Accreditation Authority for Translators and
              Interpreters?
              <span className="asterisk">*</span>
            </p>

            <input
              type="radio"
              className="formRadio"
              value="5"
              onChange={event => {
                this.setState({ fCommLang: event.target.value });
              }}
            />
            <label>Yes</label>
            <br />

            <input
              type="radio"
              className="formRadio"
              value="0"
              onChange={event => {
                this.setState({ fCommLang: event.target.value });
              }}
            />
            <label>No</label>
          </div>

          <div className="form_group">
            <h3>Study in regional Australia</h3>
            <p className="formElementQuestion">
              Do you have at least 1 degree, diploma or trade qualification from
              an Australian educational institution that satisfies the
              Australian study requirement obtained while living and studying in
              an eligible area of regional Australia?
              <span className="asterisk">*</span>
            </p>

            <input
              type="radio"
              className="formRadio"
              value="5"
              onChange={event => {
                this.setState({ fRegStud: event.target.value });
              }}
            />
            <label>Yes</label>
            <br />

            <input
              type="radio"
              className="formRadio"
              value="0"
              onChange={event => {
                this.setState({ fRegStud: event.target.value });
              }}
            />
            <label>No</label>
          </div>

          <div className="form_group">
            <h3>Partner skills</h3>
            <p className="formElementQuestion">
              Is your spouse or de facto partner also an applicant for this visa
              and meet age, English and skill criteria
              <span className="asterisk">*</span>
            </p>

            <input
              type="radio"
              className="formRadio"
              value="5"
              onChange={event => {
                this.setState({ fProfYear: event.target.value });
              }}
            />
            <label>Yes</label>
            <br />

            <input
              type="radio"
              className="formRadio"
              value="0"
              onChange={event => {
                this.setState({ fProfYear: event.target.value });
              }}
            />
            <label>No</label>
          </div>

          <div className="form_group">
            <h3>Professional year in Australia</h3>
            <p className="formElementQuestion">
              Did you complete a professional year in Australia?
              <span className="asterisk">*</span>
            </p>

            <input
              type="radio"
              className="formRadio"
              value="5"
              onChange={event => {
                this.setState({ fPartnerSkill: event.target.value });
              }}
            />
            <label>Yes</label>
            <br />

            <input
              type="radio"
              className="formRadio"
              value="0"
              onChange={event => {
                this.setState({ fRegStud: event.target.value });
              }}
              fPartnerSkill
            />
            <label>No</label>
          </div>

          <div className="points">
            <h2>Your total points summary</h2>
            <p>
              Age:
              <input type="text" value={fAge} />
            </p>
            <br />
            <p>
              English Language:
              <input type="text" value={fEng} />
            </p>
            <br />
            <p>
              Overseas Skilled Employment:
              <input type="text" value={fOffEmp} />
            </p>
            <br />
            <p>
              Australian Skilled Employment:
              <input type="text" value={fOnEmp} />
            </p>
            <br />
            <p>
              Qualifications:
              <input type="text" value={fEduQ} />
            </p>
            <br />
            <p>
              Australian study requirement:
              <input type="text" value={fAuStud} />
            </p>
            <br />
            <p>
              Specialist education requirement:
              <input type="text" value={fPointsTotal1} />
            </p>
            <br />
            <p>
              Accredition in a community language:
              <input type="text" value={fPointsTotal1} />
            </p>
            <br />
            <p>
              Study in regional Australia:
              <input type="text" value={fPointsTotal1} />
            </p>
            <br />
            <p>
              Partner skills:
              <input type="text" value={fPointsTotal1} />
            </p>
            <br />
            <p>
              Professional year in Australia:
              <input type="text" value={fPointsTotal1} />
            </p>
            <br />
            <p>
              Your points total:
              <input type="text" value={fPointsTotal1} />
            </p>
            <br />
            <button> Reset Calculator</button>
          </div>

          {/* points calc finish here */}

          <div className="ghost">
            <input
              type="text"
              placeholder="What needs to be done?"
              value={inputValue}
              onChange={event => {
                this.setState({ inputValue: event.target.value });
              }}
            />
            <button type="submit" className="add-button">
              +
            </button>
          </div>
        </form>

        <ul>{todoItems}</ul>

        <div className="footer">
          <div className="footer-left">
            <p>
              <span className="items-left-number">{itemsRemaining.length}</span>{" "}
              items left
            </p>
          </div>
          <div className="footer-right">
            <button
              className="clear-button"
              onClick={() => this.setState({ todos: itemsRemaining })}
            >
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
