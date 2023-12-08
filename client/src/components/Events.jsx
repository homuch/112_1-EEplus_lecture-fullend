import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CCol,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilCheck } from "@coreui/icons";
import { Link } from "react-router-dom";
const Events = ({ events }) => {
  return events.map(({ id, title, inInterests, joined }, i) => (
    <Link
      to={`/event/${id}`}
      key={i}
      className="w-full text-decoration-none my-1"
    >
      <CCard key={i} color="light">
        <CCardBody>
          <CRow>
            <CCol xs={8}>
              <CCardTitle>{title} </CCardTitle>
            </CCol>
            <CCol xs={4} className="d-flex flex-row justify-content-between">
              {joined ? (
                <CIcon icon={cilCheck} className="text-success" size="xl" />
              ) : null}
              <CCardText className="ms-auto">{inInterests} 人參加</CCardText>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </Link>
  ));
};

export default Events;
