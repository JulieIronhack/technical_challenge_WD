import { Table, Button, Spin } from "antd";

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
            setPhone(record.id ? String(record.id) : "0");
            window.scrollTo(0, 0);
          }}
        >
          Details
        </Button>
      ),
    },
  ];

  return (
    <>{phones ? <Table dataSource={phones} columns={columns} /> : <Spin />}</>
  );
}

export default PhoneList;
