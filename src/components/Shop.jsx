import PageHeader from "./PageHeader";
import PropertyListing from "./PropertyListing";
function Shop() {
  return (
    <>
      <PageHeader title={"Shop"} showDivider={true} />
      <PropertyListing />
    </>
  );
}

export default Shop;
