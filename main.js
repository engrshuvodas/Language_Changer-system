const langEl=document.querySelector('.langWrap');
const link=document.querySelectorAll('a');
const titleEl=document.querySelector('.title');
const descriptionEl=document.querySelector('.description');

link.forEach(el =>{
    el.addEventListener('click',()=>{
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');
        const attr = el.getAttribute('language');
        titleEl.textContent = data[attr].title;
        descriptionEl.textContent = data[attr].description;
    });
});
var data={
    "english":{
        "title":"Welcome to Banglapedia",
        "description":"Banglapedia - the National Encyclopedia of Bangladesh, an intellectual output of over 1450 scholars, is so far the most comprehensive reference work on Bangladesh from high ancient period to date. In it users will have access to all branches of knowledge related to Bangladesh. Banglapedia has become a vital and indispensable companion to teachers, students, researchers, professionals, and general readers. As a reference tool, Banglapedia has received enthusiastic response and has been acclaimed nationally and internationally. This revised Second Edition (2012) is an expanded and updated version of the First Edition (2003)."
    },
    "bangla":{
        "title":"বাংলাপিডিয়ায় স্বাগতম!",
        "description":"বাংলাপিডিয়া - বাংলাদেশের জাতীয় জ্ঞানকোষ এ জ্ঞানকোষে প্রায় ১৪৫০ জন পণ্ডিতের সৃজনশীল কাজের সমন্বয় ঘটেছে। বাংলাদেশের প্রাচীনতমকাল থেকে বর্তমান পর্যন্ত সকল গুরুত্বপূর্ণ বিষয়ের বর্ণনা বাংলাপিডিয়ায় অন্তর্ভুক্ত করা হয়েছে। ফলে এটি অধ্যয়নের মাধ্যমে বাংলাদেশ সংক্রান্ত সকল বিষয়ে সুস্পষ্ট জ্ঞান লাভ করা সম্ভব। প্রথম প্রকাশের পর বাংলাপিডিয়া ব্যাপক উৎসাহব্যঞ্জক সাড়া পেয়েছে এবং জাতীয় ও আন্তর্জাতিকভাবে প্রশংসিত হয়েছে। ফলে বাংলাপিডিয়া শিক্ষক, শিক্ষার্থী, গবেষক, পেশাজীবী এবং সাধারণ পাঠকদের অপরিহার্য সহচরে পরিণত হয়েছে। বর্তমান দ্বিতীয় সংস্করণটি (২০১২) ইতিপূর্বে প্রকাশিত প্রথম সংস্করণের (২০০৩)"
    }
}