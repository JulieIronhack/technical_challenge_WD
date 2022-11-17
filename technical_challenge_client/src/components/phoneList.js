// import { fetchPhones } from "../api/index";
import { Table, Button } from "antd";

function PhoneList({ phones, setPhone }) {
  const columns = [
    {
      title: "Image",
      dataIndex: "imageFileName",
      render: (_, record) => (
        <img
          className="img__phone--small"
          src={`/images/${record.imageFileName}`}
          alt={record.name}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Manufact.",
      dataIndex: "manufacturer",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() => {
            setPhone(record.id ? record.id : 0);
          }}
        >
          Details
        </Button>
      ),
    },
  ];

  return <Table dataSource={phones} columns={columns} />;
}

export default PhoneList;
