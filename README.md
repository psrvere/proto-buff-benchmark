# Protobuf Benchmark

A simple benchmark comparing the serialization efficiency of JSON vs Protocol Buffers (protobuf) for structured data.

## Overview

This project demonstrates the space efficiency of Protocol Buffers compared to JSON serialization by creating identical datasets in both formats and comparing their file sizes. The benchmark uses employee data with 1000 records to show real-world performance differences.

## Project Structure

```
proto-buff-benchmark/
├── README.md                 # This documentation
├── package.json              # Node.js dependencies
├── employees.proto           # Protocol buffer schema definition
├── employees_pb.js           # Generated protobuf JavaScript code
├── create_data_json.js       # Script to generate JSON test data
├── create_data_proto.js      # Script to generate protobuf test data
├── employees_data.json       # Generated JSON data (81 KB)
└── employees_data.bin        # Generated protobuf data (21 KB)
```

## Data Schema

The benchmark uses an `Employee` structure with the following fields:
- `id` (integer): Unique employee identifier
- `name` (string): Employee name
- `salary` (float): Employee salary
- `age` (integer): Employee age

## Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd proto-buff-benchmark
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Generate protobuf JavaScript code** (if needed)
   ```bash
   # Install protoc compiler if not already installed
   # On macOS: brew install protobuf
   # On Ubuntu: sudo apt-get install protobuf-compiler
   
   protoc --js_out=import_style=commonjs,binary:. employees.proto
   ```

## Usage

### Generate Test Data

1. **Create JSON dataset**
   ```bash
   node create_data_json.js
   ```
   This creates `employees_data.json` with 1000 employee records.

2. **Create Protobuf dataset**
   ```bash
   node create_data_proto.js
   ```
   This creates `employees_data.bin` with the same 1000 employee records in protobuf format.

### View Results

Check the file sizes:
```bash
ls -lh employees_data.*
```

## Benchmark Results

| Format   | File Size | Compression Ratio |
|----------|-----------|-------------------|
| JSON     | 81 KB     | 1.0x (baseline)   |
| Protobuf | 21 KB     | **3.9x smaller**  |

Protocol Buffers achieved **74% size reduction** compared to JSON