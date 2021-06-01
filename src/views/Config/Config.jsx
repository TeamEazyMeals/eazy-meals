import React from "react";
import {Button} from "@material-ui/core";

 const Config = ()=>{

     return <div>
         <Button type="submit" href="/config/allergies" >Allergies</Button>
         <br></br>
         <Button type="submit" href="/config/familyallergies" >FamilyAllergies</Button>
         <br></br>
         <Button type="submit" href="/config/goals" >Goals</Button>
        <br></br>
         <Button type="submit" href="/config/healthCondition" >HealthCondtion</Button>
         <br></br>
         <Button type="submit" href="/config/health">Health</Button>
         <br></br>
        < Button type="submit" href="/config/preferences">Preferences</Button>
     </div>
 }
 export default Config