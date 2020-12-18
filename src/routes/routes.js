import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import OptionUser from "../screens/OptionUser";
import SignIn from "../screens/ClientUser/SignIn";
import ForgotPassword from "../screens/ClientUser/SignIn/forgotPassword";
import Training from "../screens/ClientUser/Training";
import Exercise from "../screens/ClientUser/Training/exercise";
import Exercise2 from "../screens/ClientUser/Training/exerciseCopy";
import Chats from "../screens/ClientUser/Chats";
import PerformanceGraph from "../screens/ClientUser/Performance"; 

import SignInAdm from "../screens/AdmUser/SignIn"; 
import SignUp from "../screens/AdmUser/SignUp"; 
import Trainings from "../screens/AdmUser/Trainings";
import AddTraining from "../screens/AdmUser/Trainings/AddTraining";
import AddSucessTrain from "../screens/AdmUser/Trainings/AddTraining/addSucess";
import InstructorArea from "../screens/AdmUser/InstructorArea"; 
import AddStudent from "../screens/AdmUser/InstructorArea/AddStudent";
import AddStudentContinous from "../screens/AdmUser/InstructorArea/AddStudent/continous";
import AddExercise from "../screens/AdmUser/InstructorArea/AddExercise"; 
import AddExerciseContinous from "../screens/AdmUser/InstructorArea/AddExercise/continous"; 
import ExerciseGroup from "../screens/AdmUser/Trainings/Exercise"; 
import PerformanceStudent from "../screens/AdmUser/Trainings/Exercise/PerformanceStudent"; 
import Notifications from "../screens/AdmUser/Notifications"; 
import ChatsAdm from "../screens/AdmUser/Chats" 



const Stack = createStackNavigator(); 
const Tab = createBottomTabNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OptionUser" component={OptionUser} />

      {/* Client */}
      <Stack.Screen name="SignInCli" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="PerformanceGraph" component={PerformanceGraph} />
      <Stack.Screen name="Training" component={Training} />
      <Stack.Screen name="Exercise" component={Exercise} /> 
      <Stack.Screen name="Exercise2" component={Exercise2} /> 

      
      {/* Adm */}
      <Stack.Screen name="SignInAdm" component={SignInAdm} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Trainings" component={Trainings} />
      <Stack.Screen name="AddTraining" component={AddTraining} />
      <Stack.Screen name="AddSucessTrain" component={AddSucessTrain} />
      <Stack.Screen name="InstructorArea" component={InstructorArea} />
      <Stack.Screen name="AddStudent" component={AddStudent} />
      <Stack.Screen name="AddStudentContinous" component={AddStudentContinous} />
      <Stack.Screen name="AddExercise" component={AddExercise} />
      <Stack.Screen name="AddExerciseContinous" component={AddExerciseContinous} />
      <Stack.Screen name="ExerciseGroup" component={ExerciseGroup} />
      <Stack.Screen name="PerformanceStudent" component={PerformanceStudent} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="ChatsAdm" component={ChatsAdm} />

      
    </Stack.Navigator>
  </NavigationContainer>
);
