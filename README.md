# Blog Platform - MERN Stack

Ứng dụng blog đơn giản được xây dựng với MERN Stack (MongoDB, Express.js, React, Node.js), cho phép người dùng tạo, xem, chỉnh sửa và quản lý bài viết blog.

## 📋 Mục lục

- [Tính năng](#-tính-năng)
- [Công nghệ sử dụng](#-công-nghệ-sử-dụng)
- [Cấu trúc dự án](#-cấu-trúc-dự-án)
- [Cài đặt](#-cài-đặt)
- [Cấu hình](#-cấu-hình)
- [Chạy ứng dụng](#-chạy-ứng-dụng)
- [API Endpoints](#-api-endpoints)
- [Cấu trúc Database](#-cấu-trúc-database)

## ✨ Tính năng

- 🏠 Trang chủ hiển thị bài viết mới nhất
- 📝 Tạo bài viết mới
- ✏️ Chỉnh sửa bài viết
- 📖 Xem chi tiết bài viết
- 📚 Danh sách tất cả bài viết
- 🎨 Giao diện responsive, thân thiện với người dùng
- ⚡ Real-time data fetching với Axios

## 🛠 Công nghệ sử dụng

### Backend

- **Node.js** - Runtime environment
- **Express.js v5.2.1** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose v9.2.2** - ODM cho MongoDB
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Quản lý biến môi trường
- **Nodemon** - Auto-restart server khi development
- **Biome** - Linter và formatter

### Frontend

- **React v19.2.0** - UI library
- **React Router DOM v7.13.1** - Routing
- **Vite v7.3.1** - Build tool và dev server
- **Axios v1.13.5** - HTTP client
- **React Icons v5.5.0** - Icon library
- **CSS3** - Styling

## 📁 Cấu trúc dự án

```
blogs-beginners/
├── backend/
│   ├── connection/
│   │   └── connection.js          # Kết nối MongoDB
│   ├── controllers/
│   │   └── blogController.js      # Business logic
│   ├── models/
│   │   └── blog.js                # Schema MongoDB
│   ├── routes/
│   │   └── blogs.js               # API routes
│   ├── .env                       # Biến môi trường
│   ├── app.js                     # Entry point
│   ├── package.json
│   └── biome.json                 # Biome config
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   │   ├── Page1.jsx      # Hero section
│   │   │   │   └── Page2.jsx      # Recent blogs
│   │   │   └── navbar/
│   │   │       └── navbar.jsx     # Navigation bar
│   │   ├── pages/
│   │   │   ├── Home.jsx           # Trang chủ
│   │   │   ├── Blogs.jsx          # Danh sách blog
│   │   │   ├── BlogDetail.jsx     # Chi tiết blog
│   │   │   └── WriteAndUpdate.jsx # Tạo/sửa blog
│   │   ├── App.jsx                # Root component
│   │   └── main.jsx               # Entry point
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## 🚀 Cài đặt

### Yêu cầu hệ thống

- Node.js (v16 trở lên)
- MongoDB Atlas account hoặc MongoDB local
- npm hoặc yarn

### Bước 1: Clone repository

```bash
git clone <repository-url>
cd blogs-beginners
```

### Bước 2: Cài đặt dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

## ⚙️ Cấu hình

### Backend Configuration

Tạo file `.env` trong thư mục `backend/`:

```env
PORT=1000
MONGO_URI=mongodb://[username]:[password]@[host]/[database]?[options]
```

**Lưu ý:** Thay thế các giá trị trong dấu ngoặc vuông bằng thông tin MongoDB của bạn.

### Frontend Configuration

Frontend mặc định kết nối tới backend tại `http://localhost:1000`. Nếu cần thay đổi, cập nhật URL trong các file:

- `frontend/src/pages/Blogs.jsx`
- `frontend/src/pages/BlogDetail.jsx`
- `frontend/src/pages/WriteAndUpdate.jsx`
- `frontend/src/components/home/Page2.jsx`

## 🏃 Chạy ứng dụng

### Development Mode

#### Chạy Backend

```bash
cd backend
npm run dev
```

Server sẽ chạy tại `http://localhost:1000`

#### Chạy Frontend

```bash
cd frontend
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173` (hoặc port khác nếu 5173 đã được sử dụng)

### Production Mode

#### Build Frontend

```bash
cd frontend
npm run build
```

#### Chạy Backend

```bash
cd backend
npm start
```

## 📡 API Endpoints

Base URL: `http://localhost:1000/api/v1`

| Method | Endpoint            | Mô tả                                       |
| ------ | ------------------- | ------------------------------------------- |
| GET    | `/`                 | Health check                                |
| POST   | `/post`             | Tạo bài viết mới                            |
| GET    | `/get-all`          | Lấy tất cả bài viết (sắp xếp theo mới nhất) |
| GET    | `/get-recent-blogs` | Lấy 3 bài viết mới nhất                     |
| GET    | `/get-blog/:id`     | Lấy chi tiết bài viết theo ID               |
| PUT    | `/update-blog/:id`  | Cập nhật bài viết theo ID                   |

### Request/Response Examples

#### Tạo bài viết mới

```javascript
POST /api/v1/post
Content-Type: application/json

{
  "title": "Tiêu đề bài viết",
  "description": "Nội dung bài viết..."
}

// Response
{
  "message": "Lưu dữ liệu thành công"
}
```

#### Lấy tất cả bài viết

```javascript
GET / api / v1 / get -
  all[
    // Response
    {
      _id: "507f1f77bcf86cd799439011",
      title: "Tiêu đề bài viết",
      description: "Nội dung bài viết...",
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-01T00:00:00.000Z",
    }
  ];
```

## 🗄 Cấu trúc Database

### Blog Schema

```javascript
{
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    auto: true
  },
  updatedAt: {
    type: Date,
    auto: true
  }
}
```

## 📝 Scripts

### Backend Scripts

```bash
npm start          # Chạy production server
npm run dev        # Chạy development server với nodemon
npm run format     # Format code với Biome
npm run lint       # Lint code với Biome
npm run check      # Check và fix code với Biome
```

### Frontend Scripts

```bash
npm run dev        # Chạy development server
npm run build      # Build production
npm run preview    # Preview production build
npm run lint       # Lint code với ESLint
npm run format     # Format code với Biome
npm run check      # Check và fix code với Biome
```

## 🎨 Tính năng UI/UX

- Responsive design cho mobile, tablet và desktop
- Loading states cho data fetching
- Error handling với thông báo thân thiện
- Skeleton loading cho trải nghiệm tốt hơn
- Smooth navigation với React Router
- Clean và modern UI design

## 🔒 Bảo mật

- CORS được cấu hình để chấp nhận requests từ frontend
- Environment variables để bảo vệ thông tin nhạy cảm
- MongoDB connection string được mã hóa trong .env

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng:

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

ISC

## 👨‍💻 Tác giả

Dự án được tạo bởi anhtuan11swd

---

**Lưu ý:** Đây là dự án học tập cho người mới bắt đầu với MERN Stack. Không nên sử dụng trực tiếp cho production mà không có các cải tiến về bảo mật và tối ưu hóa.
