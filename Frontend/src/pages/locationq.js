import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
    <Layout>
        <Seo title="Location Question" />
        <h1>Do you know where you wanna go?</h1>
        <p>Is it about the journey or the destination?</p>

        <button to="">Yes</button>
        <button to="">No</button>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default SecondPage
