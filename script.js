// trang index
//tìm kiếm ở header
document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("searchButton");
  const searchInput = document.getElementById("searchInput");

  // Hàm xử lý tìm kiếm
  const handleSearch = () => {
    const searchValue = searchInput.value.trim(); // Lấy giá trị từ ô input
    console.log(`Từ khóa tìm kiếm: ${searchValue}`);
  };

  // Xử lý sự kiện nhấn nút tìm kiếm
  searchButton.addEventListener("click", handleSearch);

  // Xử lý sự kiện nhấn phím Enter
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Ngăn form gửi đi nếu có
      handleSearch();
    }
  });
});

//Chọn loại nhà
document.addEventListener("DOMContentLoaded", () => {
  // Lấy tất cả các nút thuộc lớp 'property-button'
  const buttons = document.querySelectorAll(".property-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Xóa lớp 'active' khỏi tất cả các nút
      buttons.forEach((btn) => btn.classList.remove("active"));

      // Thêm lớp 'active' vào nút được chọn
      button.classList.add("active");
    });
  });
});

//Bộ lọc tìm kiếm ở header
document.addEventListener("DOMContentLoaded", () => {
  // Lấy tất cả các select
  const selects = document.querySelectorAll("select");

  selects.forEach((select) => {
    // Sự kiện change để xử lý giá trị đã chọn
    select.addEventListener("change", (e) => {
      const selectedValue = e.target.value;
      const selectedText = e.target.options[e.target.selectedIndex].text;

      if (selectedValue !== "default") {
        console.log(`Bạn đã chọn: ${selectedText} (Value: ${selectedValue})`);
      }
    });
  });
});

//ẩn hiện thanh nav
document.addEventListener("DOMContentLoaded", () => {
  const dashboardButton = document.getElementById("dashboardButton");
  const sideNav = document.getElementById("sideNav");
  const overlay = document.getElementById("overlay");

  // Khi nhấn nút "Dashboard", hiển thị thanh Nav
  dashboardButton.addEventListener("click", () => {
    sideNav.classList.toggle("open");
    overlay.classList.toggle("active");
  });

  // Khi click vào overlay (vùng ngoài), đóng thanh Nav
  overlay.addEventListener("click", () => {
    sideNav.classList.remove("open");
    overlay.classList.remove("active");
  });
});

//chọn giữa các loai dự án nổi bật màn index
document.addEventListener("DOMContentLoaded", () => {
  // Lấy danh sách tất cả các thẻ <a> trong .quick-search-select
  const quickSearchLinks = document.querySelectorAll(
    ".heroSection-project-select a"
  );

  // Thêm sự kiện click cho từng thẻ <a>
  quickSearchLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Ngăn chặn hành vi mặc định (nếu cần)

      // Loại bỏ class "active" khỏi tất cả các thẻ <a>
      quickSearchLinks.forEach((el) => el.classList.remove("active"));

      // Thêm class "active" cho thẻ được click
      link.classList.add("active");
    });
  });
});

//chọn giữa các loai dtin tuc màn index
document.addEventListener("DOMContentLoaded", () => {
  // Lấy danh sách tất cả các thẻ <a> trong .quick-search-select
  const quickSearchLinks = document.querySelectorAll(
    ".heroSection-news-select a"
  );

  // Thêm sự kiện click cho từng thẻ <a>
  quickSearchLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Ngăn chặn hành vi mặc định (nếu cần)

      // Loại bỏ class "active" khỏi tất cả các thẻ <a>
      quickSearchLinks.forEach((el) => el.classList.remove("active"));

      // Thêm class "active" cho thẻ được click
      link.classList.add("active");
    });
  });
});

//bộ lọc tìm kiếm dự án ở màn danh sách dự án
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("searchButtonProject")
    .addEventListener("click", () => {
      const fields = document.querySelectorAll(".form-field");
      const values = {};
      let isValid = true;

      fields.forEach((field, index) => {
        const value = field.value.trim();
        if (!value) {
          // Kiểm tra nếu giá trị là mặc định hoặc trống
          console.log(`Field ${index + 1} is invalid (default or empty).`);
          isValid = "Default";
        }
        values[`Field ${index + 1}`] = value || "Default";
      });

      if (isValid) {
        console.log("Valid Input:", values);
      }
    });
});

//slide ảnh
document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Show the modal when "Xem tất cả ảnh" button is clicked
  document.getElementById("viewAllBtn").addEventListener("click", () => {
    document.getElementById("imageModal").classList.remove("hidden");
    document.getElementById("imageModal").setAttribute("aria-hidden", "false");
  });

  // Close the modal
  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("imageModal").classList.add("hidden");
    document.getElementById("imageModal").setAttribute("aria-hidden", "true");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".mySwiper-Projects", {
    slidesPerView: 1, // Mặc định cho màn hình nhỏ
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2, // 2 slides cho các thiết bị từ 640px
      },
      1024: {
        slidesPerView: 3, // 3 slides cho các thiết bị từ 1024px
      },
    },
  });
});

//tự động cuộn khi ấn vào thanh ngang thông tin chi tiết dự án
document.addEventListener("DOMContentLoaded", () => {
  // Lấy tất cả các liên kết trong thanh điều hướng
  document.querySelectorAll(".heroSection-news-select a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>

      // Tìm mục tiêu cần cuộn đến dựa trên thuộc tính href
      const targetId = this.getAttribute("href").slice(1); // Lấy id từ href
      const targetElement = document.getElementById(targetId);

      // Cuộn đến mục tiêu
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

//run gon + doc them ở trang chi tiet du an
document.addEventListener("DOMContentLoaded", () => {
  // Lấy tất cả các nút toggle-content
  document.querySelectorAll(".toggle-content button").forEach((button) => {
    button.addEventListener("click", function () {
      // Lấy section liên quan
      const section = this.closest(".section");
      const content = section.querySelector(".content");
      const title = section.getAttribute("data-section");

      // Kiểm tra trạng thái hiển thị
      if (this.dataset.expanded === "true") {
        content.classList.add("hidden");
        this.innerHTML = `
          <span class="text-[#142a72]"> Đọc thêm +</span>
        `;
        this.dataset.expanded = "false";

        // Cập nhật màu nền nếu cần
        section
          .querySelector(".toggle-content > div")
          .classList.remove("bg-[#FFFAF1]");
        section
          .querySelector(".toggle-content > div")
          .classList.add("bg-[#F1F5F9]");
      } else {
        content.classList.remove("hidden");
        this.innerHTML = `
          <span class="text-orange-500">Rút gọn −</span>
        `;
        this.dataset.expanded = "true";

        // Cập nhật màu nền nếu cần
        section
          .querySelector(".toggle-content > div")
          .classList.remove("bg-[#F1F5F9]");
        section
          .querySelector(".toggle-content > div")
          .classList.add("bg-[#FFFAF1]");
      }
    });
  });
});

//Đăng ký tư vấn ở màn chi tiết dự án
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("consultation-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngừng gửi form

    // Lấy giá trị các trường input
    const fullName = document.getElementById("full-name").value;
    const phoneNumber = document.getElementById("phone-number").value;

    // Console log giá trị của các trường
    console.log("Họ và tên:", fullName);
    console.log("Số điện thoại:", phoneNumber);
  });
});
