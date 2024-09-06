import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import pic2 from'../public/pic2.avif';

function App() {
  return (
    <div className="h-screen bg-gradient-to-t from-light-black to-dark-black py-16 px-8">
      <div className="h-full w-full items-center flex">
        <div className="w-1/2 bg-pink-300"></div>
        <div className="w-1/2 h-full flex flex-col">
          <div className="flex-1 bg-[#363C43] ps-12 pe-4 py-4 relative rounded-xl shadow-box">
            <img
              src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.3846%2018C13.3846%2018.2738%2013.3034%2018.5415%2013.1513%2018.7692C12.9991%2018.9969%2012.7829%2019.1744%2012.5299%2019.2792C12.2769%2019.384%2011.9985%2019.4114%2011.7299%2019.358C11.4613%2019.3046%2011.2146%2019.1727%2011.0209%2018.9791C10.8273%2018.7854%2010.6954%2018.5387%2010.642%2018.2701C10.5886%2018.0015%2010.616%2017.7231%2010.7208%2017.4701C10.8256%2017.2171%2011.0031%2017.0009%2011.2308%2016.8487C11.4585%2016.6966%2011.7262%2016.6154%2012%2016.6154C12.3672%2016.6154%2012.7194%2016.7613%2012.9791%2017.0209C13.2387%2017.2806%2013.3846%2017.6328%2013.3846%2018ZM12%205.53846C9.45462%205.53846%207.38462%207.40192%207.38462%209.69231V10.1538C7.38462%2010.3987%207.48187%2010.6334%207.65498%2010.8066C7.82809%2010.9797%208.06288%2011.0769%208.3077%2011.0769C8.55251%2011.0769%208.7873%2010.9797%208.96041%2010.8066C9.13352%2010.6334%209.23077%2010.3987%209.23077%2010.1538V9.69231C9.23077%208.42308%2010.4735%207.38461%2012%207.38461C13.5265%207.38461%2014.7692%208.42308%2014.7692%209.69231C14.7692%2010.9615%2013.5265%2012%2012%2012C11.7552%2012%2011.5204%2012.0972%2011.3473%2012.2704C11.1742%2012.4435%2011.0769%2012.6783%2011.0769%2012.9231V13.8462C11.0769%2014.091%2011.1742%2014.3258%2011.3473%2014.4989C11.5204%2014.672%2011.7552%2014.7692%2012%2014.7692C12.2448%2014.7692%2012.4796%2014.672%2012.6527%2014.4989C12.8258%2014.3258%2012.9231%2014.091%2012.9231%2013.8462V13.7631C15.0277%2013.3765%2016.6154%2011.6977%2016.6154%209.69231C16.6154%207.40192%2014.5454%205.53846%2012%205.53846ZM24%2012C24%2014.3734%2023.2962%2016.6934%2021.9776%2018.6668C20.6591%2020.6402%2018.7849%2022.1783%2016.5922%2023.0865C14.3995%2023.9948%2011.9867%2024.2324%209.65892%2023.7694C7.33115%2023.3064%205.19295%2022.1635%203.51472%2020.4853C1.83649%2018.807%200.693605%2016.6689%200.230582%2014.3411C-0.232441%2012.0133%200.00519941%209.60051%200.913451%207.4078C1.8217%205.21508%203.35977%203.34094%205.33316%202.02236C7.30655%200.703788%209.62663%200%2012%200C15.1816%200.00335979%2018.2319%201.26872%2020.4816%203.51843C22.7313%205.76814%2023.9966%208.81843%2024%2012ZM22.1538%2012C22.1538%209.99176%2021.5583%208.02861%2020.4426%206.35882C19.3269%204.68903%2017.7411%203.38759%2015.8857%202.61907C14.0303%201.85055%2011.9887%201.64947%2010.0191%202.04126C8.04943%202.43305%206.24019%203.40011%204.82015%204.82015C3.40011%206.24019%202.43305%208.04943%202.04126%2010.0191C1.64947%2011.9887%201.85055%2014.0303%202.61907%2015.8857C3.38759%2017.7411%204.68904%2019.3269%206.35883%2020.4426C8.02862%2021.5583%209.99176%2022.1538%2012%2022.1538C14.692%2022.1508%2017.2729%2021.08%2019.1765%2019.1765C21.08%2017.2729%2022.1508%2014.692%2022.1538%2012Z'%20fill='url(%23paint0_linear_2267_3329)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2267_3329'%20x1='19.5'%20y1='27.5'%20x2='3.5'%20y2='2'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%234A4E54'/%3e%3cstop%20offset='1'%20stop-color='%23A3ADBA'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
              alt="question-mark"
              className="absolute top-4 left-3"
            />
            <img
              src="data:image/svg+xml,%3csvg%20width='24'%20height='31'%20viewBox='0%200%2024%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20x='10.6878'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20y='10.6879'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20x='10.6878'%20y='10.6879'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20y='21.3756'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20x='10.6878'%20y='21.3756'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3c/svg%3e"
              alt="box"
              className="absolute left-3 top-1/2"
            />
            <div className="rounded-2xl h-12 flex items-center text-white bg-black mr-14 space-x-20">
              <button className="ml-1 rounded-2xl h-10 hover:bg-gray-600 px-7">
                About Me
              </button>
              <button className="rounded-2xl h-10 hover:bg-gray-600 px-7">
                Experience
              </button>
              <button className="rounded-2xl  h-10 hover:bg-gray-600 px-7">
                Recommended
              </button>
            </div>
            <div className="mt-4 h-[175px] overflow-scroll overflow-x-hidden mr-12">
              <p className="text-white mr-10">
                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now. I was born and
                raised in Albany, NY& have been living in Santa Carla for the
                past 10 years my wife Tiffany and my 4 year old twin daughters-
                Emma and Ella. Both of them are just starting school, so my
                calender is usually blocked between 9-10 AM. This is a...Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="w-11/12 my-5 divide-solid h-1 rounded-sm mx-auto border bottom-4"></div>
          <div className="flex-1 bg-[#363C43] ps-8 pe-3 py-4 relative rounded-xl shadow-box">
            <img
              src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.3846%2018C13.3846%2018.2738%2013.3034%2018.5415%2013.1513%2018.7692C12.9991%2018.9969%2012.7829%2019.1744%2012.5299%2019.2792C12.2769%2019.384%2011.9985%2019.4114%2011.7299%2019.358C11.4613%2019.3046%2011.2146%2019.1727%2011.0209%2018.9791C10.8273%2018.7854%2010.6954%2018.5387%2010.642%2018.2701C10.5886%2018.0015%2010.616%2017.7231%2010.7208%2017.4701C10.8256%2017.2171%2011.0031%2017.0009%2011.2308%2016.8487C11.4585%2016.6966%2011.7262%2016.6154%2012%2016.6154C12.3672%2016.6154%2012.7194%2016.7613%2012.9791%2017.0209C13.2387%2017.2806%2013.3846%2017.6328%2013.3846%2018ZM12%205.53846C9.45462%205.53846%207.38462%207.40192%207.38462%209.69231V10.1538C7.38462%2010.3987%207.48187%2010.6334%207.65498%2010.8066C7.82809%2010.9797%208.06288%2011.0769%208.3077%2011.0769C8.55251%2011.0769%208.7873%2010.9797%208.96041%2010.8066C9.13352%2010.6334%209.23077%2010.3987%209.23077%2010.1538V9.69231C9.23077%208.42308%2010.4735%207.38461%2012%207.38461C13.5265%207.38461%2014.7692%208.42308%2014.7692%209.69231C14.7692%2010.9615%2013.5265%2012%2012%2012C11.7552%2012%2011.5204%2012.0972%2011.3473%2012.2704C11.1742%2012.4435%2011.0769%2012.6783%2011.0769%2012.9231V13.8462C11.0769%2014.091%2011.1742%2014.3258%2011.3473%2014.4989C11.5204%2014.672%2011.7552%2014.7692%2012%2014.7692C12.2448%2014.7692%2012.4796%2014.672%2012.6527%2014.4989C12.8258%2014.3258%2012.9231%2014.091%2012.9231%2013.8462V13.7631C15.0277%2013.3765%2016.6154%2011.6977%2016.6154%209.69231C16.6154%207.40192%2014.5454%205.53846%2012%205.53846ZM24%2012C24%2014.3734%2023.2962%2016.6934%2021.9776%2018.6668C20.6591%2020.6402%2018.7849%2022.1783%2016.5922%2023.0865C14.3995%2023.9948%2011.9867%2024.2324%209.65892%2023.7694C7.33115%2023.3064%205.19295%2022.1635%203.51472%2020.4853C1.83649%2018.807%200.693605%2016.6689%200.230582%2014.3411C-0.232441%2012.0133%200.00519941%209.60051%200.913451%207.4078C1.8217%205.21508%203.35977%203.34094%205.33316%202.02236C7.30655%200.703788%209.62663%200%2012%200C15.1816%200.00335979%2018.2319%201.26872%2020.4816%203.51843C22.7313%205.76814%2023.9966%208.81843%2024%2012ZM22.1538%2012C22.1538%209.99176%2021.5583%208.02861%2020.4426%206.35882C19.3269%204.68903%2017.7411%203.38759%2015.8857%202.61907C14.0303%201.85055%2011.9887%201.64947%2010.0191%202.04126C8.04943%202.43305%206.24019%203.40011%204.82015%204.82015C3.40011%206.24019%202.43305%208.04943%202.04126%2010.0191C1.64947%2011.9887%201.85055%2014.0303%202.61907%2015.8857C3.38759%2017.7411%204.68904%2019.3269%206.35883%2020.4426C8.02862%2021.5583%209.99176%2022.1538%2012%2022.1538C14.692%2022.1508%2017.2729%2021.08%2019.1765%2019.1765C21.08%2017.2729%2022.1508%2014.692%2022.1538%2012Z'%20fill='url(%23paint0_linear_2267_3329)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2267_3329'%20x1='19.5'%20y1='27.5'%20x2='3.5'%20y2='2'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%234A4E54'/%3e%3cstop%20offset='1'%20stop-color='%23A3ADBA'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
              alt="question-mark"
              className="absolute top-4 left-3"
            />
            <img
              src="data:image/svg+xml,%3csvg%20width='24'%20height='31'%20viewBox='0%200%2024%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20x='10.6878'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20y='10.6879'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20x='10.6878'%20y='10.6879'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20y='21.3756'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20x='10.6878'%20y='21.3756'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3c/svg%3e"
              alt="box"
              className="absolute left-3 top-1/2"
            />
            <div className="h-14 flex items-center space-x-60 text-white mr-14">
              <div>
                <button className="ml-4 rounded-xl h-12 w-28 bg-black hover:bg-gray-600">
                  Gallery
                </button>
              </div>
              <div className="flex space-x-4">
                <button className="bg-gray-700 w-28 rounded-2xl h-12 hover:bg-gray-600">
                  + Add Image
                </button>
                <button className="left-arrow arrow-btn h-11 w-11 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-600">
                  <img src="data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.40222%208.37645H15.5967'%20stroke='%236F787C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.40222%2015.3765L1.40222%208.37646L8.40222%201.37646'%20stroke='%236F787C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" alt="left-arrow" className="arrow-icon" />
                </button>
                <button className='bg-gray-900 h-11 w-11 rounded-full flex items-center justify-center hover:bg-gray-600'>
                  <img src="data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.5968%208.37648L1.40236%208.37648'%20stroke='%236F787C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.5968%201.37646L15.5968%208.37646L8.5968%2015.3765'%20stroke='%236F787C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" alt="" />
                </button>
              </div>
            </div>
            <div className="h-44 mt-4 flex ml-1">
              <img src={pic2} alt="sdf" className="h-32 grayscale border border-none rounded-xl my-5 mx-4 hover:grayscale-0 hover:-rotate-6" /> 
              <img src={pic2} alt="sdf" className="h-32 grayscale border border-none rounded-xl my-5 mx-4 hover:grayscale-0 hover:-rotate-6" /> 
              <img src={pic2} alt="sdf" className="h-32 grayscale border border-none rounded-xl my-5 mx-4 hover:grayscale-0 hover:-rotate-6" /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
