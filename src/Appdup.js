import logo from './logo.png';
import mobilemock from './mobilemock.png';
import mobilemock2 from './mobilemock2.png';
import orangeright from './orangeright.png';
import playstorelogo from './playstorelogo.png';
import playButton from './playButton.png';
import blueleft from './blueleft.png';
import orangeleft from './orangeleft.png';
import blueright from './blueright.png';
import './App.css';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import { Steps } from 'rsuite';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';

function App() {
const grid = [];

const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
  setValue(newValue);
};

const handleChangeIndex = (index) => {
  setValue(index);
};

  // setup the step content
const step1Content = <h1>Step 1 Content</h1>;
const step2Content = <h1>Step 2 Content</h1>;
const step3Content = <h1>Step 3 Content</h1>;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const classes = useStyles();
const theme = useTheme();
// setup step validators, will be called before proceeding to the next step
function step2Validator() {
  // return a boolean
}

function step3Validator() {
  // return a boolean
}

function onFormSubmit() {
  // handle the submit logic here
  // This function will be executed at the last step
  // when the submit button (next button in the previous steps) is pressed
//}

  //const handleChange = (event) => {

//   for (let i = 0; i < 10; i++) {
//     grid.push({
//         <div style ={{backgroundColor: "gray",height:200,width 200}}></div>
//     });
}
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

  return (
      <div>
        <div className="App">
          <img  style ={{flexGrow: 1,height: 500}} src = {blueleft} className = "App-logo" alt = "logo"/>
          <div style = {{flexGrow:2,paddingTop:30,paddingLeft: 36}}>
            <div>
                <div style ={{display: "flex", margintop: 20,width: 600}}>
                  <div style = {{flexGrow: 1}} >
                    <img  style = {{height: 70}} src = {logo} className = "App-logo" alt = "logo"/>
                  </div>
                  <div className = "Tab-layout">
                      {/*<Tab label = {<span style = {{fontSize : 12, textTransform: "capitalize"}}>Home</span>}/>
                      <Tab label = {<span style = {{fontSize : 12,textTransform: "capitalize"}}>Features</span>}/>
                      <Tab label = {<span style = {{fontSize : 12,textTransform: "capitalize"}}>About Us</span>}/>
                      <Tab label = {<span style = {{fontSize : 12,textTransform: "capitalize"}}>Contact</span>}/>*/}
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                      >
                        <Tab label="Home" {...a11yProps(0)} />
                        <Tab label="Features" {...a11yProps(1)} />
                        <Tab label="About Us" {...a11yProps(2)} />
                        <Tab label="Contact" {...a11yProps(2)} />
                      </Tabs>
                   </div>
                 </div>
                 <div style = {{padding: 30}}>
                   <div style ={{display : "flex",marginTop: 100}}>
                      <div style ={{marginTop: 72,textAlign: "left",flex: "40%",position: "relative"}}>
                        <div style ={{whiteSpace: "nowrap",fontSize: 28,fontWeight: "bold",marginBottom: 28}}>
                          Live Your Passion
                        </div>
                        <div style ={{whiteSpace: "nowrap",marginBottom: 28,fontSize: 25}}>Be an Expert</div>
                        <div style ={{marginBottom: 28,fontSize: 12}}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        </div>
                        <div style ={{marginTop: 45}}>
                        <img src = {playstorelogo} className = "App-logo" alt = "logo"/>
                        </div>
                     </div>
                   </div>
                 </div>
            </div>
          </div>
          <div style ={{flexGrow: 1,marginTop: 200}}>
            <img style ={{position: "absolute",marginLeft: 148}} src = {mobilemock} className = "App-logo" alt = "logo"/>
            <img style ={{marginTop: 179}} src = {orangeright} className = "App-logo" alt = "logo"/>
          </div>
        </div>
        <div style = {{margin: "auto",width : 1162}}>
        <div style = {{marginBottom: 24, textAlign: "left",marginTop:950, marginLeft: 123}}>
          <div style = {{height: 30,fontWeight: "bold",fontSize: "large"}}>How it Works</div>
          <div style = {{width: 171,fontSize: 12}}> Lorem Ipsum is simply dummy text of the printing and</div>
        </div>
        <StepProgressBar
              startingStep={0}
              labelClass={'labelClass'}
              subtitleClass={'subtitleClass'}
              onSubmit={onFormSubmit}
              steps={[
                {
                  label: 'How it Works',
                  subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's of type and scrambled",

                },
                {
                  label: 'How it Works',
                  subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's of type and scrambled",
                  name: 'step 2',

                },
                {
                  label: 'How it Works',
                  subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's of type and scrambled",
                  name: 'step 3',

                },
                {
                  label: 'How it Works',
                  subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's of type and scrambled",
                  name: 'step 4',

                }
              ]}
            />;
        </div>
        <div style = {{marginBottom: 24, textAlign: "left",marginTop:48, marginLeft: 253}}>
          <div style = {{height: 30,fontWeight: "bold",fontSize: "large"}}>Features</div>
          <div style = {{width: 171,fontSize: 12}}> Lorem Ipsum is simply dummy text of the printing and</div>
        </div>
        <div style = {{marginTop:39.5,display: "flex"}}>
          <div style ={{flexGrow: 1}}></div>
            <div class="container">
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
            </div>
          <div style ={{flexGrow: 1}}></div>
        </div>
        <div style ={{display: "flex",marginTop: 40,height: 465, backgroundImage: "linear-gradient(to right, #3D5AFE ,#052093)",backgroundColor: "blue"}}>
          <div style = {{flex: "50%",position: "relative"}}>
            <div style = {{position: "absolute",top: "50%",left: "50%",transform: "translate(-50%, -50%)"}}>
              <div>
                <div style = {{fontSize : 35,whiteSpace: "nowrap",marginBottom: 15,color: "white",fontWeight: "bold"}}>
                  Watch Video Presenation
                </div>
                <div  style = {{fontSize : 14,color: "white"}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
              </div>
            </div>
          </div>
          <div style = {{flex: "50%",position: "relative"}}>
            <img style = {{position: "absolute",top: "50%",left: "50%",transform: "translate(-50%, -50%)"}} src = {playButton} className = "App-logo" alt = "logo"/>
          </div>
        </div>
        <div style ={{display : "flex"}}>
              <div style = {{flexGrow: 1}}></div>
              <div style ={{display : "flex",flexDirection: "row",flexGrow: 2,width: "10%"}}>
                <img style ={{marginTop: 200,height: 500,marginRight: "3%"}} src = {mobilemock2}/>
                <div style ={{marginTop: 350}}>
                     <div style ={{whiteSpace: "nowrap",fontSize: 25,fontWeight: "bold",marginBottom: 28}}>
                       Live Your Passion
                     </div>
                     <div style ={{marginBottom: 28,fontSize: 13}}>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                     </div>
                     <img style = {{height: 30}} src = {playstorelogo} className = "App-logo" alt = "logo"/>
                </div>
              </div>
              <div style = {{flexGrow: 1}}></div>
            </div>
           <div style = {{display:"flex"}}>
           <div style = {{flexGrow: 1}}>
             <img style = {{}} src = {orangeleft} className = "App-logo" alt = "logo"/>
            </div>
            <div style ={{display : "flex",flexGrow: 2,marginTop: 675}}>
               <div style ={{flexGrow:2, marginRight: "7%"}}>
                   <div style ={{whiteSpace: "nowrap",fontSize: 25,fontWeight: "bold",marginBottom: 28}}>
                     Live Your Passion
                   </div>
                   <div style ={{marginBottom: 28,fontSize: 13}}>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                   </div>
                   <img style = {{height: 30}} src = {playstorelogo} className = "App-logo" alt = "logo"/>
               </div>
               <div style ={{flexGrow: 1}}></div>
               <img style ={{height: 500,flexGrow: 2}} src = {mobilemock2}/>
             </div>
            <div style = {{flexGrow: 1,textAlign: "end",marginTop: "-300px"}}>
             <img style = {{}} src = {blueright} className = "App-logo" alt = "logo"/>
            </div>
           </div>
           <div style ={{marginTop: 40,height: 220,backgroundColor: "gray"}}>
           </div>
      </div>

  );
}

export default App;
