import NewsList from "./NewsList"
import PageHeader from "./PageHeader";

export default function News(){
  return (
    <>
    <PageHeader title={"News"} showDivider={true}></PageHeader>
    <NewsList></NewsList>
    
    </>
  );

}