// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.css",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.js",
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/datepicker.js",
        },
        {
          innerHTML: `
          function checkSmoke(input)
          {
            
            var checkboxes = document.getElementsByClassName("radioCheckSmoke");
            
            for(var i = 0; i < checkboxes.length; i++)
            {
              //uncheck all
              if(checkboxes[i].checked == true)
              {
                checkboxes[i].checked = false;
              }
            }
            
            //set checked of clicked object
            if(input.checked == true)
            {
              input.checked = false;
            }
            else
            {
              input.checked = true;
            }	
          }

          function checkDrink(input)
          {
            
            var checkboxes = document.getElementsByClassName("radioCheckDrink");
            
            for(var i = 0; i < checkboxes.length; i++)
            {
              //uncheck all
              if(checkboxes[i].checked == true)
              {
                checkboxes[i].checked = false;
              }
            }
            
            //set checked of clicked object
            if(input.checked == true)
            {
              input.checked = false;
            }
            else
            {
              input.checked = true;
            }	
          }

          function checkExercise(input)
          {
            
            var checkboxes = document.getElementsByClassName("radioCheckExercise");
            
            for(var i = 0; i < checkboxes.length; i++)
            {
              //uncheck all
              if(checkboxes[i].checked == true)
              {
                checkboxes[i].checked = false;
              }
            }
            
            //set checked of clicked object
            if(input.checked == true)
            {
              input.checked = false;
            }
            else
            {
              input.checked = true;
            }	
          }

          function checkSleep(input)
          {
            
            var checkboxes = document.getElementsByClassName("radioCheckSleep");
            
            for(var i = 0; i < checkboxes.length; i++)
            {
              //uncheck all
              if(checkboxes[i].checked == true)
              {
                checkboxes[i].checked = false;
              }
            }
            
            //set checked of clicked object
            if(input.checked == true)
            {
              input.checked = false;
            }
            else
            {
              input.checked = true;
            }	
          }

          function checkSkin(input)
          {
            
            var checkboxes = document.getElementsByClassName("radioCheckSkin");
            
            for(var i = 0; i < checkboxes.length; i++)
            {
              //uncheck all
              if(checkboxes[i].checked == true)
              {
                checkboxes[i].checked = false;
              }
            }
            
            //set checked of clicked object
            if(input.checked == true)
            {
              input.checked = false;
            }
            else
            {
              input.checked = true;
            }	
          }
          `,
          type: "text/javascript",
        },
      ],
      bodyAttrs: {
        class: "bg-[#164d4d] max-h-[1248px]",
      },
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      Poppins: { wght: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
      Inter: { wght: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
      Montserrat: { wght: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
