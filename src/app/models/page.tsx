import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import ArtisanCallout from "@/components/ArtisanCallout";
import FeaturedAccessories from "@/components/FeaturedAccessories";

export default function NosCreationsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <ProductList />
        </div>
      </main>
      <FeaturedAccessories />
      <ArtisanCallout />
      <Footer />
    </div>
  );
}
