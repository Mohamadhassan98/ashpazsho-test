import makeStyles from "@material-ui/core/styles/makeStyles";

export const zwnj = '‌';
export const strings = {
    pageTest1: {
        learningCourse: 'دوره آموزش حضوری پخت غذاهای ایرانی',
        searchRecipe: 'دستور غذای مورد نظر خود را جستجو کنید',
        loremIpsum: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد',
        miniLoremIpsum: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در',
        aboutCourse: 'درباره دوره',
        learnThreeRecipes: 'آموزش پخت سه نوع غذای ایرانی و خارجی',
        recipe1: 'قرمه سبزی',
        recipe2: 'پیتزا',
        recipe3: 'نان برنجی',
        likes: (persons) => `${persons} نفر`,
        aboutTeacher: 'درباره مدرس',
        teacher: 'مدرس',
        teacher1: 'سرآشپز فرنود',
        courseDate: 'تاریخ برگزاری',
        courseDate1: '2 الی 4 دی ماه 1398',
        courseTime1: 'هر روز از ساعت 9 صبح تا 5 بعدازظهر',
        license: 'با اعطای مدرک معتبر',
        price1: '11,000 تومان',
        signUp: 'ثبت نام',
        login: 'ورود',
        recommendedCourses: {
            mobile: `دوره${zwnj}های پیشنهادی`,
            web: `دوره${zwnj}های پیشنهادی حضوری و آنلاین`
        },
        online: 'آنلاین',
        presentment: 'حضوری',
        priceUnit: 'تومان',
        course1: 'آموزش آنلاین پخت پیتزا',
        course2: 'آموزش حضوری پخت پیتزا',
        mainPage: 'صفحه اصلی',
        learningCourses: `دوره${zwnj}های آموزشی`,
        learningClips: `فیلم${zwnj}های آموزشی`,
        contactUs: 'ارتباط با ما',
        aboutUs: 'درباره ما',
        signInUp: 'ورود/ثبت نام',
        packages: `پکیج${zwnj}ها`,
        foodCategories: `دسته${zwnj}بندی غذایی`,
        recommendationsAndOffers: `پیشنهادها و تخفیف${zwnj}ها`,
        exit: 'خروج',
        foodCategory1: 'غذای سنتی',
        teacherHonors: [
            'مدیریت مجموعه آشپزشو، قناد شو',
            'کارشناس صدا و سیما',
            `سرآشپز بین${zwnj}المللی`,
            `مدرس رسمی سازمان فنی و حرفه${zwnj}ای`
        ],
        footer: {
            address: 'آدرس',
            phoneNumber: 'شماره تماس',
            phoneNumber1: '02166715466',
            socialMedia: `لینک شبکه${zwnj}های اجتماعی`,
            telegram: `نکات و ترفندهای آموزش + تخفیف${zwnj}های ویژه`,
            instagram: `آموزش، کلیپ${zwnj}ها و ترفندهای یک دقیقه${zwnj}ای آموزشی`
        }
    }
};

export const appName = 'آشپز شو، قناد شو';
export const appNameShort = 'آشپز شو';

export const genericStyles = makeStyles(theme => ({
    genericFullWidth: {
        width: '100%'
    },
    ltr: {
        flip: false,
        textAlign: 'left',
        direction: 'ltr',
    },
    inlineFlex: {
        display: 'inline-flex'
    },
    centerJustifyContent: {
        justifyContent: 'center'
    },
    genericAutoWidth: {
        width: 'auto'
    },
    centerAlignItems: {
        alignItems: 'center'
    },
    flexEndJustifyContent: {
        justifyContent: 'flex-end'
    }
}));

export const colors = {
    backgroundMainColor: {
        background: '#FF364A'
    },
    fontMainColor: {
        color: '#FF364A'
    },
    fontGreenColor: {
        color: '#03B40F'
    },
    fontWhiteColor: {
        color: '#FFFFFF'
    },
    backgroundGreenColor: {
        background: '#03B40F'
    },
    backgroundLightMainColor: {
        background: '#FE5F6F',
    },
    fontDarkMainColor: {
        color: '#CD1626',
    },
    fontGrayColor: {
        color: '#8d8d8d'
    },
    backgroundGrayColor: {
        background: '#EEEEEE'
    }
};