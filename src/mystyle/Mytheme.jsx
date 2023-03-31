

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
          ? {
            ali:{
  
              main:"#647488"
            },
            favcolor:{
  main: "rgb(247,247,247)",

  
            }
            }
          : {
              // palette values for dark mode
              ali:{
  
                main:"teal"
              },
              favcolor:{
                main:null,
               
                
                          }
         
          
            }),
      },
  });
  export default getDesignTokens
  