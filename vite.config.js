import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { loadEnv } from 'vite';

export default ({ command, mode }) => {
  const plugins = [vue()];  
  const env = loadEnv(mode, process.cwd());  

  const envWithProcessPrefix = Object.entries(env).reduce(  
    (prev, [key, val]) => {    
      return {      
        ...prev,
        ["process.env." + key]: `"${val}"`      
      };    
    },    
  {}
  );  
  return {  
    base: "./",    
    resolve: {    
      alias: {      
        "@": resolve("./src"),
      },    
    },    
    plugins,    
    define: envWithProcessPrefix,  
  }};