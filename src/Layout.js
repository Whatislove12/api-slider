import ImageSlider from "./ImageSlider";
import { Footer } from "./components/Footer";
import styles from "./styles/Layout.module.scss";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <h2>Main Slider</h2>
      <ImageSlider />
      <Footer />
    </div>
  );
};
