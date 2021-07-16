import { useMount,useToggle } from "react-use";
import {internalRecipes} from "../../api/cms/internalRecipes";

export const useRecipeCategories=()=>{
    const [loading ,setloading] = useToggle(true)

    useMount(async ()=>{
        console.log("fire")
console.log(await internalRecipes.read())

    })
    return {
        loading
    }
}
export default useRecipeCategories;