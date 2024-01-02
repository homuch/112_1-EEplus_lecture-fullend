import {
  CContainer,
  CRow,
  CCol,
  CButton,
  CSpinner,
  CFormInput,
  CForm,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilChevronLeft } from "@coreui/icons";
import { Link, useParams } from "react-router-dom";
// import eventDetails from "../../eventDetails.json";
import { useEventDetails, UserContext } from "../utils";
import { useContext } from "react";
const toBetterDateString = (dateString) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}`;
};

const EventPage = () => {
  const { id: eventId } = useParams();
  const { user } = useContext(UserContext);
  const [event, pending, joinOrLeave, postComment] = useEventDetails(
    eventId,
    user.id
  );
  // const event = eventDetails.find((event) => event.id === eventId);
  return pending ? (
    <CSpinner
      color="primary"
      variant="grow"
      className="d-abosolute top-50 start-50 translate-middle"
    />
  ) : (
    <CContainer>
      <CRow className="my-3">
        <CCol xs={2}>
          <Link to="/" className="text-decoration-none">
            <CIcon icon={cilChevronLeft} size="4xl" />
          </Link>
        </CCol>
        <CCol xs={9}>
          <CRow>
            <h1 className="fw-bold bg-light rounded p-2">{event.title}</h1>
          </CRow>
          <CRow>
            <h3 className="fw-semibold bg-light rounded p-2">
              From {toBetterDateString(event.timeStart)} to{" "}
              {toBetterDateString(event.timeEnd)}
            </h3>
          </CRow>
        </CCol>
        <CCol xs={1}>
          <CButton
            color={event.joined ? "success" : "transparent"}
            className="h-100 border border-2 bg-gradient"
            disabled={!user.logined}
            onClick={() => {
              joinOrLeave(!event.joined);
            }}
          >
            {user.logined
              ? event.joined
                ? "取消參加"
                : "我想參加"
              : "請先登入"}
          </CButton>
        </CCol>
      </CRow>
      <CCol xs={12}>
        <CForm>
          <CFormInput
            className="bg-warning bg-opacity-50 rounded text-center w-100 border border-2 border-warning"
            disabled={!event.joined}
            placeholder={event.joined ? "快來參與討論吧" : "加入活動以參與討論"}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                postComment(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </CForm>
      </CCol>
      {event.comments.map((comment, i) => (
        <CCol xs={12} className="my-2" key={i}>
          <CRow className="bg-light rounded p-3">
            <CCol
              xs={2}
              className="d-flex flex-column justify-content-center align-items-center border-end border-2"
            >
              <h5 className="fw-bold m-0 br-1">{comment.user.name}</h5>
            </CCol>
            <CCol xs={10} className="d-flex flex-column justify-content-center">
              <p className="m-0">{comment.content}</p>
            </CCol>
          </CRow>
        </CCol>
      ))}
    </CContainer>
  );
};

export default EventPage;
