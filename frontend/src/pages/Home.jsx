import Page1 from "../components/home/Page1";
import Page2 from "../components/home/Page2";

function Home() {
  return (
    <div className="page">
      <div className="container">
        <Page1 />
        <div className="section-header">
          <h2 className="section-title">Bài viết mới nhất</h2>
          <p className="section-subtitle">
            Khám phá những bài viết mới nhất từ cộng đồng
          </p>
        </div>
        <Page2 />
      </div>
    </div>
  );
}

export default Home;
