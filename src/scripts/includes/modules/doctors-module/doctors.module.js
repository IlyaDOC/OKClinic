
/** Функционал страниц всех врачей и одного врача */
export default class DoctorsModule {
    constructor() {
        this.onInit();
    }

    onInit() {
        this.doctorsFilter();
        this.reviewsCountSetup();
    }

    /** Фильтр по специальностям на странице всех врачей*/
    doctorsFilter() {
        const doctorsFilterTabs = document.querySelectorAll(".doctors__inner .filter-item");

        if (doctorsFilterTabs && doctorsFilterTabs.length > 0) {
            doctorsFilterTabs.forEach((filterTab) => {
                filterTab.addEventListener("click", function () {
                    this.classList.add("active");
                    const closeBtn = this.querySelector('.close-btn');
                    const that = this;
                    closeBtn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        that.classList.remove("active");
                    })
                })
            })
        }
    }

    /** Подставляет значение количества отзывов на странице врача */
    reviewsCountSetup() {
        const reviews = document.querySelectorAll(".doctor-reviews .review");
        const doctorReviewsCountElement = document.querySelector(".doctor .anchor-link[href='#reviews']");
        if (reviews && reviews.length > 0 && doctorReviewsCountElement) {
            doctorReviewsCountElement.textContent = `Отзывы (${reviews.length})`;
        } else if (reviews && reviews.length === 0 && doctorReviewsCountElement){
            doctorReviewsCountElement.textContent = `Отзывы (0)`;
        }
    }
}