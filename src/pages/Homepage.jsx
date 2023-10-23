import Form from "../components/Form";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import { useForm } from "../contexts/FormContexts";

function Homepage() {
  return (
    <Layout>
      <Sidebar />
      <Form />
    </Layout>
  );
}

export default Homepage;
