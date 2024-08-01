# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  # ContactApp
project setup 
run this command on terminal
1. npm create vite@latest my-project -- --template react
2. cd my-project
3. install all the dependencies :
4. 1. npm i
5. #Tailwind Css configuration setting , open terminal and run the command
6.  1.npm install -D tailwindcss postcss autoprefixer
7. initialize the Tailwind css
8. 1.npx tailwindcss init -p
 ### the program setup is done 
 9.you can fetch tailwind command from its official sites https://tailwindcss.com/docs/guides/vite
 
### Run the program using
1. npm run dev
# installation of pretteir
1.npm install -D prettier prettier-plugin-tailwindcss
# Firebase Setup and Installation 
1. visit its official sites https://firebase.google.com/
2. go to console -> Add project -> Enter project Name(vite-contact -> tick the checkbox -> continue -> we don't nedd analytics tun off the button -> continue
3. After loading,
4.  (</>) ->click on that icon
5.   register the app -> name of the app -> click on register app -> on terminal -> npm install firebase
6.   go to src-> create folder name(config) -> inside config create a file name (firebase.js)
7.   In firebase.js you paste the source code that is gievn in your firebase register app
8. firebase setup is done .
  # Create database in Firebase
  1. go to firestore -> create database-> select test mode -> next-> select server->  enable
  2. Select collaction -> Name of collection(contacts)-> next-> click on Auto-id -> fill all the feilds->save.
  3. creation od databse in firebase is done

# import icons
1. react icon official links : https://react-icons.github.io/react-icons/search/#q=plus
2. for search , delete, close, add, edit and contact 
3. go to terminal : npm install react-icons
4. and then use the name of the icon and also forst import the icon name from react-icon.
5. We use "FiSearch,CiCirclePlus, AiOutlineClose, HiOutlineUserCircle, RiEditCircleLine, IoMdTrash"

# we use Formik 
1. we create a custom modal(card pop-up) for adding new contact
2. In this we create a form for creating form we use an external library(Formik)
3. go to terminal and run command : "npm i formik"
4. and then import it in the modal.jsx and create a form inside the <formik></formik/>

# import react-toastify package
1. official wewbsite https://www.npmjs.com/package/react-toastify
2. this is used for giving the alter to the user for update, delete, and add new contact.
3. go to terminal and run command : "npm i react-toastify"
4. and then also import gist:
5. import { ToastContainer, toast } from 'react-toastify';
6. import 'react-toastify/dist/ReactToastify.css';
7. And the use as Component <ToastContainer>

# download Yup
1. yup is used for validation of form
2. go to terminal and run command : "npm i yup"
3. then import it in to file "import * as Yub from "yup""

 # COMPLETE PROJECT
 other code you can see from the files.
