import React, { useState } from 'react';
import { Form, Select, Button, Card, Radio, Typography } from 'antd';

const { Text, Title } = Typography;
const { Option } = Select;

const Project: React.FC = () => {
    const [estimation, setEstimation] = useState<number | null>(null);

    const calculateEstimation = (values: any) => {
        let result = 100;

        // Recession Type
        if (values.recessionType === 'RT 3') result *= 0;
        else if (values.recessionType === 'RT 2') result *= 1; // Assuming ≤100% means 100%

        // Recession Depth
        if (values.recessionDepth === '>4mm') result *= 1; // Assuming ≤100% means 100%

        // Recession Width
        if (values.recessionWidth === 'Wide') result *= 1; // Assuming ≤100% means 100%

        // Adjacent Papilla Dimension
        if (values.papillaDimension === '<5mm') result *= 0.95;

        // Gingival Thickness
        if (values.gingivalThickness === 'Thin') result *= 0.95;

        // Keratinized Tissue Width
        if (values.keratinizedTissueWidth === '<2mm') result *= 0.95;

        // Presence of NCCL
        if (values.nccLesions === 'Yes') result *= 0.95;

        // Tooth Location
        if (values.toothLocation === 'Mandible' || values.toothLocation === 'Premolar-Molar') result *= 0.95;

        // Tooth Malposition
        if (values.toothMalposition === 'Yes') result *= 0.95;

        // Tobacco Smoking
        if (values.tobaccoSmoking === 'Yes') result *= 0.95;

        setEstimation(result);
    };

    return (
        <div>
            <Typography.Title style={{ textAlign: 'center' }} level={4}>Recession parameters</Typography.Title>
            <Form
                onFinish={calculateEstimation}
                layout="vertical"
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    margin: '0 auto',
                    backgroundColor: '#f5f5f5',
                    padding: '20px 40px',
                    borderRadius: '10px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px'
                }}
            >
                <div style={{ flex: '1 1 100%', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    <div style={{ flex: '1 1 45%', minWidth: '250px' }}>
                        <Form.Item
                            name="recessionType"
                            label="Recession Type"
                            rules={[{ required: true }]}
                        >
                            <Select style={{ maxWidth: '100%' }}>
                                <Option value="RT 1">RT 1</Option>
                                <Option value="RT 2">RT 2</Option>
                                <Option value="RT 3">RT 3</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="recessionDepth"
                            label="Recession Depth"
                            rules={[{ required: true }]}
                        >
                            <Select style={{ maxWidth: '100%' }}>
                                <Option value="≤4mm">≤4mm</Option>
                                <Option value=">4mm">{'>4mm'}</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="recessionWidth"
                            label="Recession Width"
                            rules={[{ required: true }]}
                        >
                            <Select style={{ maxWidth: '100%' }}>
                                <Option value="Narrow">Narrow</Option>
                                <Option value="Wide">Wide</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="papillaDimension"
                            label="Adjacent Papilla Dimension"
                            rules={[{ required: true }]}
                        >
                            <Select style={{ maxWidth: '100%' }}>
                                <Option value="≥5mm">≥5mm</Option>
                                <Option value="<5mm">{'<5mm'}</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="gingivalThickness"
                            label="Gingival Thickness"
                            rules={[{ required: true }]}
                        >
                            <Select style={{ maxWidth: '100%' }}>
                                <Option value="Thick">Thick</Option>
                                <Option value="Thin">Thin</Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div style={{ flex: '1 1 45%', minWidth: '250px' }}>
                        <Form.Item
                            name="keratinizedTissueWidth"
                            label="Keratinized Tissue Width"
                            rules={[{ required: true }]}
                        >
                            <Select style={{ maxWidth: '100%' }}>
                                <Option value="≥2mm">≥2mm</Option>
                                <Option value="<2mm">{'<2mm'}</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="nccLesions"
                            label="Presence of NCCL"
                            rules={[{ required: true }]}
                        >
                            <Radio.Group>
                                <Radio value="No">No</Radio>
                                <Radio value="Yes">Yes</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item
                            name="toothLocation"
                            label="Tooth Location"
                            rules={[{ required: true }]}
                        >
                            <Select style={{ maxWidth: '100%' }}>
                                <Option value="Maxilla">Maxilla</Option>
                                <Option value="Mandible">Mandible</Option>
                                <Option value="Incisor-Canine">Incisor-Canine</Option>
                                <Option value="Premolar-Molar">Premolar-Molar</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="toothMalposition"
                            label="Tooth Malposition"
                            rules={[{ required: true }]}
                        >
                            <Radio.Group>
                                <Radio value="No">No</Radio>
                                <Radio value="Yes">Yes</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item
                            name="tobaccoSmoking"
                            label="Tobacco Smoking"
                            rules={[{ required: true }]}
                        >
                            <Radio.Group>
                                <Radio value="No">No</Radio>
                                <Radio value="Yes">Yes</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </div>
                </div>

                <Form.Item style={{ width: '100%' }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        Calculate Estimation
                    </Button>
                </Form.Item>

                {estimation !== null && (
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        <Title level={4}>Root Coverage Estimation</Title>
                        <Text mark strong> {estimation.toFixed(2)}% </Text>
                    </div>
                )}
            </Form>
        </div>
    );
};

export default Project;
