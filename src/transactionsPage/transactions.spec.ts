/* eslint-disable @typescript-eslint/camelcase */
export const data = {
  statements: [
    {
      key: {
        key_data: {
          id: "673bf9d0055bbae332ad497072db9bbf",
          query:
            "WITH deleted_sessions AS (DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id) SELECT count(*) FROM deleted_sessions",
          app: "$ internal-delete-sessions",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "164",
        first_attempt_count: "164",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: {
          mean: 0.0017302560975609757,
          squared_diffs: 0.027190766097243916,
        },
        run_lat: {
          mean: 0.0010671524390243902,
          squared_diffs: 0.0024573014511890235,
        },
        service_lat: {
          mean: 0.011479207317073171,
          squared_diffs: 1.822788002048951,
        },
        overhead_lat: {
          mean: 0.0086817987804878,
          squared_diffs: 1.38481972086236,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "group (scalar)",
                children: [
                  {
                    name: "scan buffer",
                    attrs: [
                      { key: "label", value: "buffer 1 (deleted_sessions)" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "DELETE FROM sqlliveness WHERE expiration < $1 RETURNING session_id",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [
                      { key: "label", value: "buffer 1 (deleted_sessions)" },
                    ],
                    children: [
                      {
                        name: "delete",
                        attrs: [{ key: "from", value: "sqlliveness" }],
                        children: [
                          {
                            name: "filter",
                            attrs: [{ key: "filter", value: "expiration < _" }],
                            children: [
                              {
                                name: "scan",
                                attrs: [
                                  { key: "missing stats", value: "" },
                                  {
                                    key: "table",
                                    value: "sqlliveness@primary",
                                  },
                                  { key: "spans", value: "FULL SCAN" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943488",
            nanos: 956814000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          id: "60d2c10043884cb136674a449007bc52",
          query: 'SELECT "generated" FROM system.reports_meta WHERE id = $1',
          app: "$ internal-get-previous-timestamp",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "165",
        first_attempt_count: "165",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: {
          mean: 0.0010962727272727276,
          squared_diffs: 0.0002159174727272727,
        },
        run_lat: {
          mean: 0.00037714545454545445,
          squared_diffs: 0.00006664950650909095,
        },
        service_lat: {
          mean: 0.00308030303030303,
          squared_diffs: 0.0004142852428484848,
        },
        overhead_lat: {
          mean: 0.0016068848484848484,
          squared_diffs: 0.00004782026481212121,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "scan",
            attrs: [
              { key: "missing stats", value: "" },
              { key: "table", value: "reports_meta@primary" },
              { key: "spans", value: "1 span" },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943469",
            nanos: 391020000,
          },
        },
        bytes_read: {
          mean: 37.87272727272729,
          squared_diffs: 18.32727272727264,
        },
        rows_read: { mean: 1, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          id: "d469b9ad35098627c7bc28a0eca86f0a",
          query:
            'SELECT id, "parentID", "parentSchemaID", name FROM system.namespace',
          app: "$ internal-get-all-names",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "29",
        first_attempt_count: "29",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: {
          mean: 0.0011247241379310346,
          squared_diffs: 0.0002293455597931035,
        },
        plan_lat: {
          mean: 0.0036076896551724123,
          squared_diffs: 0.001673707710206896,
        },
        run_lat: {
          mean: 0.0005267241379310345,
          squared_diffs: 0.000006591083793103449,
        },
        service_lat: {
          mean: 0.005386103448275863,
          squared_diffs: 0.0018046449686896554,
        },
        overhead_lat: {
          mean: 0.00012696551724137938,
          squared_diffs: 5.500029655172411e-7,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "scan",
            attrs: [
              { key: "missing stats", value: "" },
              { key: "table", value: "namespace2@primary" },
              { key: "spans", value: "FULL SCAN" },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 815110000,
          },
        },
        bytes_read: { mean: 1570, squared_diffs: 0 },
        rows_read: { mean: 35, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            "SELECT (SELECT count(*) FROM system.jobs AS j WHERE ((j.created_by_type = _) AND (j.created_by_id = s.schedule_id)) AND (j.status NOT IN (_, _, __more1__))) AS num_running, s.* FROM system.scheduled_jobs AS s WHERE next_run < current_timestamp() ORDER BY random() LIMIT _",
          app: "$ internal-find-scheduled-jobs",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "55",
        first_attempt_count: "55",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.0002004, squared_diffs: 8.563692e-7 },
        plan_lat: {
          mean: 0.0033483454545454546,
          squared_diffs: 0.00012831949443636365,
        },
        run_lat: {
          mean: 0.001046581818181818,
          squared_diffs: 0.00015142185738181813,
        },
        service_lat: {
          mean: 0.004701018181818182,
          squared_diffs: 0.00028161206498181825,
        },
        overhead_lat: {
          mean: 0.0001056909090909091,
          squared_diffs: 1.1588574545454597e-7,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "limit",
            attrs: [{ key: "count", value: "_" }],
            children: [
              {
                name: "sort",
                attrs: [{ key: "order", value: "+column26" }],
                children: [
                  {
                    name: "render",
                    children: [
                      {
                        name: "group",
                        attrs: [
                          { key: "group by", value: "schedule_id" },
                          { key: "ordered", value: "+schedule_id" },
                        ],
                        children: [
                          {
                            name: "merge join (left outer)",
                            attrs: [
                              {
                                key: "equality",
                                value: "(schedule_id) = (created_by_id)",
                              },
                              { key: "left cols are key", value: "" },
                            ],
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  { key: "filter", value: "next_run < _" },
                                ],
                                children: [
                                  {
                                    name: "scan",
                                    attrs: [
                                      { key: "missing stats", value: "" },
                                      {
                                        key: "table",
                                        value: "scheduled_jobs@primary",
                                      },
                                      { key: "spans", value: "FULL SCAN" },
                                    ],
                                  },
                                ],
                              },
                              {
                                name: "filter",
                                attrs: [
                                  { key: "filter", value: "status NOT IN _" },
                                ],
                                children: [
                                  {
                                    name: "scan",
                                    attrs: [
                                      { key: "missing stats", value: "" },
                                      {
                                        key: "table",
                                        value:
                                          "jobs@jobs_created_by_type_created_by_id_idx",
                                      },
                                      { key: "spans", value: "1 span" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943460",
            nanos: 53285000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SELECT id, config FROM system.zones",
          app: "$ internal-read-zone-configs",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000056, squared_diffs: 0 },
        plan_lat: { mean: 0.000677, squared_diffs: 0 },
        run_lat: { mean: 0.000161, squared_diffs: 0 },
        service_lat: { mean: 0.001023, squared_diffs: 0 },
        overhead_lat: { mean: 0.0001290000000000001, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "scan",
            attrs: [
              { key: "missing stats", value: "" },
              { key: "table", value: "zones@primary" },
              { key: "spans", value: "FULL SCAN" },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598938499",
            nanos: 112061000,
          },
        },
        bytes_read: { mean: 327, squared_diffs: 0 },
        rows_read: { mean: 7, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.role_options",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000243, squared_diffs: 0 },
        plan_lat: { mean: 0.004487, squared_diffs: 0 },
        run_lat: { mean: 0.094834, squared_diffs: 0 },
        service_lat: { mean: 0.100139, squared_diffs: 0 },
        overhead_lat: { mean: 0.0005750000000000061, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 614455000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.statement_bundle_chunks",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000029, squared_diffs: 0 },
        plan_lat: { mean: 0.004052, squared_diffs: 0 },
        run_lat: { mean: 0.019415, squared_diffs: 0 },
        service_lat: { mean: 0.023886, squared_diffs: 0 },
        overhead_lat: { mean: 0.000389999999999998, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 702937000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.namespace2",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000023, squared_diffs: 0 },
        plan_lat: { mean: 0.001247, squared_diffs: 0 },
        run_lat: { mean: 0.045846, squared_diffs: 0 },
        service_lat: { mean: 0.047192, squared_diffs: 0 },
        overhead_lat: { mean: 0.00007599999999999968, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 301928000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.protected_ts_meta",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000031, squared_diffs: 0 },
        plan_lat: { mean: 0.002129, squared_diffs: 0 },
        run_lat: { mean: 0.02587, squared_diffs: 0 },
        service_lat: { mean: 0.028136, squared_diffs: 0 },
        overhead_lat: { mean: 0.00010600000000000193, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 996013000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.reports_meta",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000027, squared_diffs: 0 },
        plan_lat: { mean: 0.001296, squared_diffs: 0 },
        run_lat: { mean: 0.046895, squared_diffs: 0 },
        service_lat: { mean: 0.048337, squared_diffs: 0 },
        overhead_lat: { mean: 0.00011900000000000105, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 455344000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.statement_diagnostics",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000029, squared_diffs: 0 },
        plan_lat: { mean: 0.001178, squared_diffs: 0 },
        run_lat: { mean: 0.115447, squared_diffs: 0 },
        service_lat: { mean: 0.116762, squared_diffs: 0 },
        overhead_lat: { mean: 0.00010800000000001087, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 933026000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.users",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000018, squared_diffs: 0 },
        plan_lat: { mean: 0.02436, squared_diffs: 0 },
        run_lat: { mean: 0.011798, squared_diffs: 0 },
        service_lat: { mean: 0.036264, squared_diffs: 0 },
        overhead_lat: { mean: 0.0000879999999999978, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 147547000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON DATABASE system",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000646, squared_diffs: 0 },
        plan_lat: { mean: 0.001151, squared_diffs: 0 },
        run_lat: { mean: 0.00126, squared_diffs: 0 },
        service_lat: { mean: 0.003295, squared_diffs: 0 },
        overhead_lat: { mean: 0.00023800000000000036, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [
              { key: "order", value: "+table_schema,+grantee,+privilege_type" },
            ],
            children: [
              {
                name: "filter",
                attrs: [{ key: "filter", value: "table_catalog IN _" }],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "schema_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 335260000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.replication_constraint_stats",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000031, squared_diffs: 0 },
        plan_lat: { mean: 0.00259, squared_diffs: 0 },
        run_lat: { mean: 0.011758, squared_diffs: 0 },
        service_lat: { mean: 0.014491, squared_diffs: 0 },
        overhead_lat: { mean: 0.00011200000000000099, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 71465000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.replication_stats",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000021, squared_diffs: 0 },
        plan_lat: { mean: 0.006958, squared_diffs: 0 },
        run_lat: { mean: 0.075132, squared_diffs: 0 },
        service_lat: { mean: 0.082218, squared_diffs: 0 },
        overhead_lat: { mean: 0.00010699999999999599, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 340391000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.comments",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.001264, squared_diffs: 0 },
        plan_lat: { mean: 0.002341, squared_diffs: 0 },
        run_lat: { mean: 0.022911, squared_diffs: 0 },
        service_lat: { mean: 0.027019, squared_diffs: 0 },
        overhead_lat: { mean: 0.000503, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 806357000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.replication_critical_localities",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000031, squared_diffs: 0 },
        plan_lat: { mean: 0.001086, squared_diffs: 0 },
        run_lat: { mean: 0.061622, squared_diffs: 0 },
        service_lat: { mean: 0.062856, squared_diffs: 0 },
        overhead_lat: { mean: 0.00011699999999999211, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 299746000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.ui",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000015, squared_diffs: 0 },
        plan_lat: { mean: 0.000839, squared_diffs: 0 },
        run_lat: { mean: 0.033198, squared_diffs: 0 },
        service_lat: { mean: 0.034133, squared_diffs: 0 },
        overhead_lat: { mean: 0.00008099999999999774, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 86055000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.jobs",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000314, squared_diffs: 0 },
        plan_lat: { mean: 0.002567, squared_diffs: 0 },
        run_lat: { mean: 0.015246, squared_diffs: 0 },
        service_lat: { mean: 0.018255, squared_diffs: 0 },
        overhead_lat: { mean: 0.0001280000000000031, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 806830000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.eventlog",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000029, squared_diffs: 0 },
        plan_lat: { mean: 0.001744, squared_diffs: 0 },
        run_lat: { mean: 0.025251, squared_diffs: 0 },
        service_lat: { mean: 0.027165, squared_diffs: 0 },
        overhead_lat: { mean: 0.00014100000000000223, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 814785000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.settings",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000021, squared_diffs: 0 },
        plan_lat: { mean: 0.001252, squared_diffs: 0 },
        run_lat: { mean: 0.05389, squared_diffs: 0 },
        service_lat: { mean: 0.055282, squared_diffs: 0 },
        overhead_lat: { mean: 0.00011899999999999411, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 722325000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.statement_diagnostics_requests",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000029, squared_diffs: 0 },
        plan_lat: { mean: 0.005519, squared_diffs: 0 },
        run_lat: { mean: 0.008769, squared_diffs: 0 },
        service_lat: { mean: 0.014436, squared_diffs: 0 },
        overhead_lat: { mean: 0.00011899999999999931, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 947499000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.zones",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000022, squared_diffs: 0 },
        plan_lat: { mean: 0.001607, squared_diffs: 0 },
        run_lat: { mean: 0.008429, squared_diffs: 0 },
        service_lat: { mean: 0.010177, squared_diffs: 0 },
        overhead_lat: { mean: 0.00011899999999999931, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 283268000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON DATABASE defaultdb",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.00176, squared_diffs: 0 },
        plan_lat: { mean: 0.00345, squared_diffs: 0 },
        run_lat: { mean: 0.002901, squared_diffs: 0 },
        service_lat: { mean: 0.008491, squared_diffs: 0 },
        overhead_lat: { mean: 0.00038000000000000013, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [
              { key: "order", value: "+table_schema,+grantee,+privilege_type" },
            ],
            children: [
              {
                name: "filter",
                attrs: [{ key: "filter", value: "table_catalog IN _" }],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "schema_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 332974000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.descriptor",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000035, squared_diffs: 0 },
        plan_lat: { mean: 0.001366, squared_diffs: 0 },
        run_lat: { mean: 0.023725, squared_diffs: 0 },
        service_lat: { mean: 0.025237, squared_diffs: 0 },
        overhead_lat: { mean: 0.00011099999999999999, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 862665000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.lease",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000024, squared_diffs: 0 },
        plan_lat: { mean: 0.001734, squared_diffs: 0 },
        run_lat: { mean: 0.013092, squared_diffs: 0 },
        service_lat: { mean: 0.014998, squared_diffs: 0 },
        overhead_lat: { mean: 0.00014800000000000056, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 871213000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.protected_ts_records",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000028, squared_diffs: 0 },
        plan_lat: { mean: 0.001585, squared_diffs: 0 },
        run_lat: { mean: 0.019207, squared_diffs: 0 },
        service_lat: { mean: 0.020926, squared_diffs: 0 },
        overhead_lat: { mean: 0.00010600000000000193, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 930572000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.sqlliveness",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000016, squared_diffs: 0 },
        plan_lat: { mean: 0.001579, squared_diffs: 0 },
        run_lat: { mean: 0.01528, squared_diffs: 0 },
        service_lat: { mean: 0.017199, squared_diffs: 0 },
        overhead_lat: { mean: 0.0003239999999999979, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 814664000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.tenants",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000035, squared_diffs: 0 },
        plan_lat: { mean: 0.00163, squared_diffs: 0 },
        run_lat: { mean: 0.021811, squared_diffs: 0 },
        service_lat: { mean: 0.023614, squared_diffs: 0 },
        overhead_lat: { mean: 0.00013799999999999923, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 52324000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.web_sessions",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000031, squared_diffs: 0 },
        plan_lat: { mean: 0.015857, squared_diffs: 0 },
        run_lat: { mean: 0.012078, squared_diffs: 0 },
        service_lat: { mean: 0.028335, squared_diffs: 0 },
        overhead_lat: { mean: 0.00036900000000000127, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 280742000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON DATABASE postgres",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000452, squared_diffs: 0 },
        plan_lat: { mean: 0.001008, squared_diffs: 0 },
        run_lat: { mean: 0.00227, squared_diffs: 0 },
        service_lat: { mean: 0.003884, squared_diffs: 0 },
        overhead_lat: { mean: 0.00015400000000000006, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [
              { key: "order", value: "+table_schema,+grantee,+privilege_type" },
            ],
            children: [
              {
                name: "filter",
                attrs: [{ key: "filter", value: "table_catalog IN _" }],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "schema_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 332971000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.namespace",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000033, squared_diffs: 0 },
        plan_lat: { mean: 0.001202, squared_diffs: 0 },
        run_lat: { mean: 0.008988, squared_diffs: 0 },
        service_lat: { mean: 0.010384, squared_diffs: 0 },
        overhead_lat: { mean: 0.00016099999999999969, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 255473000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.rangelog",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000014, squared_diffs: 0 },
        plan_lat: { mean: 0.000692, squared_diffs: 0 },
        run_lat: { mean: 0.013348, squared_diffs: 0 },
        service_lat: { mean: 0.014131, squared_diffs: 0 },
        overhead_lat: { mean: 0.00007699999999999894, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 945747000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.role_members",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000026, squared_diffs: 0 },
        plan_lat: { mean: 0.020724, squared_diffs: 0 },
        run_lat: { mean: 0.010693, squared_diffs: 0 },
        service_lat: { mean: 0.031572, squared_diffs: 0 },
        overhead_lat: { mean: 0.0001290000000000041, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 453871000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.scheduled_jobs",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000038, squared_diffs: 0 },
        plan_lat: { mean: 0.003114, squared_diffs: 0 },
        run_lat: { mean: 0.050855, squared_diffs: 0 },
        service_lat: { mean: 0.054148, squared_diffs: 0 },
        overhead_lat: { mean: 0.00014100000000000223, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 647227000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.table_statistics",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000017, squared_diffs: 0 },
        plan_lat: { mean: 0.000916, squared_diffs: 0 },
        run_lat: { mean: 0.035087, squared_diffs: 0 },
        service_lat: { mean: 0.0361, squared_diffs: 0 },
        overhead_lat: { mean: 0.00007999999999999674, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 989636000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW GRANTS ON TABLE system.locations",
          app: "$ internal-admin-show-grants",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.00042, squared_diffs: 0 },
        plan_lat: { mean: 0.001792, squared_diffs: 0 },
        run_lat: { mean: 0.059693, squared_diffs: 0 },
        service_lat: { mean: 0.062065, squared_diffs: 0 },
        overhead_lat: { mean: 0.00016000000000000042, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+grantee,+privilege_type" }],
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value: "(table_catalog, table_schema, table_name) IN _",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "table_privileges@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 177979000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            'SELECT s."tableID", max(s."rowCount") FROM system.table_statistics AS s JOIN (SELECT "tableID", max("createdAt") AS last_dt FROM system.table_statistics GROUP BY "tableID") AS l ON (l."tableID" = s."tableID") AND (l.last_dt = s."createdAt") GROUP BY s."tableID"',
          app: "$ internal-crdb-internal-statistics-table",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000747, squared_diffs: 0 },
        plan_lat: { mean: 0.003141, squared_diffs: 0 },
        run_lat: { mean: 0.000529, squared_diffs: 0 },
        service_lat: { mean: 0.004546, squared_diffs: 0 },
        overhead_lat: { mean: 0.00012899999999999977, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "group",
            attrs: [{ key: "group by", value: "tableID" }],
            children: [
              {
                name: "hash join",
                attrs: [
                  {
                    key: "equality",
                    value: "(tableID, createdAt) = (tableID, max)",
                  },
                  { key: "right cols are key", value: "" },
                ],
                children: [
                  {
                    name: "scan",
                    attrs: [
                      { key: "missing stats", value: "" },
                      { key: "table", value: "table_statistics@primary" },
                      { key: "spans", value: "FULL SCAN" },
                    ],
                  },
                  {
                    name: "group",
                    attrs: [
                      { key: "group by", value: "tableID" },
                      { key: "ordered", value: '+"tableID"' },
                    ],
                    children: [
                      {
                        name: "scan",
                        attrs: [
                          { key: "missing stats", value: "" },
                          { key: "table", value: "table_statistics@primary" },
                          { key: "spans", value: "FULL SCAN" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 381485000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SELECT crdb_internal.get_zone_config($1)",
          app: "$ internal-admin-query-zone",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "61",
        first_attempt_count: "61",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: {
          mean: 0.010962262295081966,
          squared_diffs: 0.01496612524980327,
        },
        run_lat: {
          mean: 0.0001431475409836065,
          squared_diffs: 0.00002388261767213114,
        },
        service_lat: {
          mean: 0.013008278688524593,
          squared_diffs: 0.018386645038262296,
        },
        overhead_lat: {
          mean: 0.0019028688524590158,
          squared_diffs: 0.0031918949369508184,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "values",
            attrs: [{ key: "size", value: "1 column, 1 row" }],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 385772000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            'UPSERT INTO system.reports_meta(id, "generated") VALUES ($1, $2)',
          app: "$ internal-timestamp-upsert-replication-constraint-stats",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "55",
        first_attempt_count: "55",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 1, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: {
          mean: 0.0008502181818181818,
          squared_diffs: 0.00002039461138181818,
        },
        run_lat: {
          mean: 0.0004187818181818182,
          squared_diffs: 0.0000023516573818181806,
        },
        service_lat: {
          mean: 0.002511127272727273,
          squared_diffs: 0.00007323099010909091,
        },
        overhead_lat: {
          mean: 0.0012421272727272726,
          squared_diffs: 0.000022764498109090915,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "upsert",
            attrs: [{ key: "into", value: "reports_meta(id, generated)" }],
            children: [
              {
                name: "values",
                attrs: [{ key: "size", value: "2 columns, 1 row" }],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943469",
            nanos: 392383000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            "SELECT COALESCE(pc.object_id, sc.object_id) AS object_id, COALESCE(pc.sub_id, sc.sub_id) AS sub_id, COALESCE(pc.comment, sc.comment) AS comment, COALESCE(pc.type, sc.type) AS type FROM (SELECT * FROM system.comments) AS sc FULL JOIN (SELECT * FROM crdb_internal.predefined_comments) AS pc ON (((pc.object_id = sc.object_id) AND (pc.sub_id = sc.sub_id)) AND (pc.type = sc.type))",
          app: "$ internal-select-comments",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "3",
        first_attempt_count: "3",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: {
          mean: 0.0013596666666666666,
          squared_diffs: 3.9532666666666625e-8,
        },
        plan_lat: {
          mean: 0.004501333333333334,
          squared_diffs: 1.772066666666677e-8,
        },
        run_lat: {
          mean: 0.014610333333333333,
          squared_diffs: 1.8317266666666694e-7,
        },
        service_lat: {
          mean: 0.020568666666666666,
          squared_diffs: 2.1424666666667046e-8,
        },
        overhead_lat: {
          mean: 0.00009733333333333354,
          squared_diffs: 8.266666666667934e-11,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "hash join (full outer)",
                attrs: [
                  {
                    key: "equality",
                    value:
                      "(object_id, sub_id, type) = (object_id, sub_id, type)",
                  },
                  { key: "left cols are key", value: "" },
                ],
                children: [
                  {
                    name: "scan",
                    attrs: [
                      { key: "missing stats", value: "" },
                      { key: "table", value: "comments@primary" },
                      { key: "spans", value: "FULL SCAN" },
                    ],
                  },
                  {
                    name: "virtual table",
                    attrs: [
                      { key: "table", value: "predefined_comments@primary" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 365041000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            'SELECT count(_), max("timestamp") FROM [DELETE FROM system.eventlog WHERE ("timestamp" >= $1) AND ("timestamp" <= $2) LIMIT _ RETURNING "timestamp"]',
          app: "$ internal-eventlog-gc",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "6",
        first_attempt_count: "6",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: {
          mean: 0.0010493333333333333,
          squared_diffs: 7.475933333333332e-8,
        },
        run_lat: {
          mean: 0.00044733333333333333,
          squared_diffs: 4.8107333333333344e-8,
        },
        service_lat: {
          mean: 0.003391666666666667,
          squared_diffs: 0.000004619869333333334,
        },
        overhead_lat: { mean: 0.001895, squared_diffs: 0.000003875134 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "group (scalar)",
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      'DELETE FROM system.eventlog WHERE ("timestamp" >= $1) AND ("timestamp" <= $2) LIMIT 1000 RETURNING "timestamp"',
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1" }],
                    children: [
                      {
                        name: "delete",
                        attrs: [{ key: "from", value: "eventlog" }],
                        children: [
                          {
                            name: "scan",
                            attrs: [
                              { key: "missing stats", value: "" },
                              { key: "table", value: "eventlog@primary" },
                              { key: "spans", value: "1 span" },
                              { key: "limit", value: "1000" },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943422",
            nanos: 899683000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            "SELECT id, payload, status, created FROM system.jobs WHERE created < $1 ORDER BY created LIMIT _",
          app: "$ internal-gc-jobs",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: { mean: 0.002082, squared_diffs: 0 },
        run_lat: { mean: 0.000251, squared_diffs: 0 },
        service_lat: { mean: 0.005072, squared_diffs: 0 },
        overhead_lat: { mean: 0.002739, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "limit",
            attrs: [{ key: "count", value: "_" }],
            children: [
              {
                name: "sort",
                attrs: [{ key: "order", value: "+created" }],
                children: [
                  {
                    name: "filter",
                    attrs: [{ key: "filter", value: "created < _" }],
                    children: [
                      {
                        name: "scan",
                        attrs: [
                          { key: "missing stats", value: "" },
                          { key: "table", value: "jobs@primary" },
                          { key: "spans", value: "FULL SCAN" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598938195",
            nanos: 994562000,
          },
        },
        bytes_read: { mean: 845, squared_diffs: 0 },
        rows_read: { mean: 2, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            "UPDATE system.jobs SET status = CASE WHEN status = $1 THEN $2 WHEN status = $3 THEN $4 ELSE status END WHERE (status IN ($1, $3)) AND ((claim_session_id = $5) AND (claim_instance_id = $6)) RETURNING id, status",
          app: "$ internal-cancel/pause-requested",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "111",
        first_attempt_count: "111",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: {
          mean: 0.0015268648648648654,
          squared_diffs: 0.0002033973749729729,
        },
        run_lat: {
          mean: 0.000478045045045045,
          squared_diffs: 0.000011708680774774776,
        },
        service_lat: {
          mean: 0.0036665585585585587,
          squared_diffs: 0.0010471899133693695,
        },
        overhead_lat: {
          mean: 0.0016616486486486484,
          squared_diffs: 0.0005157321532972976,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "update",
            attrs: [
              { key: "table", value: "jobs" },
              { key: "set", value: "status" },
            ],
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "filter",
                    attrs: [
                      {
                        key: "filter",
                        value:
                          "(claim_session_id = _) AND (claim_instance_id = _)",
                      },
                    ],
                    children: [
                      {
                        name: "index join",
                        attrs: [{ key: "table", value: "jobs@primary" }],
                        children: [
                          {
                            name: "scan",
                            attrs: [
                              { key: "missing stats", value: "" },
                              {
                                key: "table",
                                value: "jobs@jobs_status_created_idx",
                              },
                              { key: "spans", value: "2 spans" },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943734",
            nanos: 677822000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SELECT expiration FROM sqlliveness WHERE session_id = $1",
          app: "$ internal-fetch-single-session",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "57",
        first_attempt_count: "57",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: {
          mean: 0.0005892456140350876,
          squared_diffs: 0.000007036110561403506,
        },
        run_lat: {
          mean: 0.00037078947368421057,
          squared_diffs: 0.00000306395947368421,
        },
        service_lat: {
          mean: 0.0024612807017543852,
          squared_diffs: 0.0000845101135087719,
        },
        overhead_lat: {
          mean: 0.0015012456140350878,
          squared_diffs: 0.000043873806561403507,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "scan",
            attrs: [
              { key: "missing stats", value: "" },
              { key: "table", value: "sqlliveness@primary" },
              { key: "spans", value: "1 span" },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943734",
            nanos: 671318000,
          },
        },
        bytes_read: {
          mean: 59.92982456140351,
          squared_diffs: 3655.7192982456145,
        },
        rows_read: {
          mean: 0.982456140350877,
          squared_diffs: 0.9824561403508771,
        },
      },
    },
    {
      key: {
        key_data: {
          query:
            "SELECT (SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp()) AS numreadyschedules, (SELECT count(*) FROM system.jobs WHERE (created_by_type = _) AND (status NOT IN (_, _, __more1__))) AS numrunningjobs",
          app: "$ internal-scheduler-stats",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "55",
        first_attempt_count: "55",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: {
          mean: 0.0007079090909090909,
          squared_diffs: 0.0001566659765454546,
        },
        plan_lat: {
          mean: 0.0033432909090909085,
          squared_diffs: 0.0001351419073454546,
        },
        run_lat: {
          mean: 0.0006980545454545454,
          squared_diffs: 0.0000035494968363636347,
        },
        service_lat: {
          mean: 0.0048993818181818196,
          squared_diffs: 0.0004796928689818182,
        },
        overhead_lat: {
          mean: 0.0001501272727272726,
          squared_diffs: 2.573941090909082e-7,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "values",
                attrs: [{ key: "size", value: "2 columns, 1 row" }],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "(SELECT count(*) FROM system.scheduled_jobs WHERE next_run < current_timestamp())",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "group (scalar)",
                    children: [
                      {
                        name: "scan",
                        attrs: [
                          { key: "missing stats", value: "" },
                          {
                            key: "table",
                            value: "scheduled_jobs@next_run_idx",
                          },
                          { key: "spans", value: "1 span" },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value:
                      "(SELECT count(*) FROM system.jobs WHERE (created_by_type = 'crdb_schedule') AND (status NOT IN ('succeeded', 'canceled', 'failed')))",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "group (scalar)",
                    children: [
                      {
                        name: "filter",
                        attrs: [{ key: "filter", value: "status NOT IN _" }],
                        children: [
                          {
                            name: "scan",
                            attrs: [
                              { key: "missing stats", value: "" },
                              {
                                key: "table",
                                value:
                                  "jobs@jobs_created_by_type_created_by_id_idx",
                              },
                              { key: "spans", value: "1 span" },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943460",
            nanos: 50660000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW DATABASES",
          app: "$ internal-admin-show-dbs",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.007223, squared_diffs: 0 },
        plan_lat: { mean: 0.018724, squared_diffs: 0 },
        run_lat: { mean: 0.039981, squared_diffs: 0 },
        service_lat: { mean: 0.072175, squared_diffs: 0 },
        overhead_lat: { mean: 0.0062470000000000026, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+name" }],
            children: [
              {
                name: "virtual table",
                attrs: [{ key: "table", value: "databases@primary" }],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 240355000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: 'SELECT id, "parentID", name FROM [2 AS namespace]',
          app: "$ internal-get-all-names-deprecated-namespace",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "29",
        first_attempt_count: "29",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: {
          mean: 0.0000660689655172414,
          squared_diffs: 4.006586206896552e-8,
        },
        plan_lat: {
          mean: 0.000765137931034483,
          squared_diffs: 0.00023433356544827588,
        },
        run_lat: {
          mean: 0.0020942413793103446,
          squared_diffs: 0.000738050427310345,
        },
        service_lat: {
          mean: 0.003092620689655173,
          squared_diffs: 0.0009079918468275863,
        },
        overhead_lat: {
          mean: 0.0001671724137931034,
          squared_diffs: 0.0000018253901379310343,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "scan",
            attrs: [
              { key: "missing stats", value: "" },
              { key: "table", value: "namespace@primary" },
              { key: "spans", value: "FULL SCAN" },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 830573000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "INSERT INTO sqlliveness VALUES ($1, $2)",
          app: "$ internal-insert-session",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "2",
        first_attempt_count: "2",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 1, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: { mean: 0.0007545, squared_diffs: 2.8560499999999976e-8 },
        run_lat: {
          mean: 0.00037549999999999997,
          squared_diffs: 4.2050000000000077e-10,
        },
        service_lat: { mean: 0.0033005, squared_diffs: 8.051805000000002e-7 },
        overhead_lat: { mean: 0.0021705, squared_diffs: 5.607405000000004e-7 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "insert",
            attrs: [
              { key: "into", value: "sqlliveness(session_id, expiration)" },
            ],
            children: [
              {
                name: "values",
                attrs: [{ key: "size", value: "2 columns, 1 row" }],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598942533",
            nanos: 925138000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            "UPDATE system.jobs SET claim_session_id = $1, claim_instance_id = $2 WHERE claim_session_id IS NULL ORDER BY created DESC LIMIT $3 RETURNING id",
          app: "$ internal-claim-jobs",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "111",
        first_attempt_count: "111",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: {
          mean: 0.0011535765765765765,
          squared_diffs: 0.000033068853099099097,
        },
        run_lat: {
          mean: 0.000925936936936937,
          squared_diffs: 0.0019954986045585587,
        },
        service_lat: {
          mean: 0.0035172702702702704,
          squared_diffs: 0.002302444441891892,
        },
        overhead_lat: {
          mean: 0.0014377567567567568,
          squared_diffs: 0.00009946950243243246,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "update",
            attrs: [
              { key: "table", value: "jobs" },
              { key: "set", value: "claim_session_id, claim_instance_id" },
            ],
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "limit",
                    attrs: [{ key: "count", value: "_" }],
                    children: [
                      {
                        name: "sort",
                        attrs: [{ key: "order", value: "-created" }],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value: "claim_session_id IS NULL",
                              },
                            ],
                            children: [
                              {
                                name: "scan",
                                attrs: [
                                  { key: "missing stats", value: "" },
                                  { key: "table", value: "jobs@primary" },
                                  { key: "spans", value: "FULL SCAN" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943734",
            nanos: 674198000,
          },
        },
        bytes_read: {
          mean: 843.8648648648649,
          squared_diffs: 4068.9729729729547,
        },
        rows_read: { mean: 2, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SELECT crdb_internal.get_namespace_id($1, $2)",
          app: "$ internal-admin-query-namespace-ID",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "119",
        first_attempt_count: "119",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: {
          mean: 0.006646403361344539,
          squared_diffs: 0.032808252158638654,
        },
        run_lat: {
          mean: 0.0000666890756302521,
          squared_diffs: 9.897914957983186e-7,
        },
        service_lat: {
          mean: 0.007856705882352944,
          squared_diffs: 0.03472112115270588,
        },
        overhead_lat: {
          mean: 0.0011436134453781516,
          squared_diffs: 0.0015093642742184876,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "values",
            attrs: [{ key: "size", value: "1 column, 1 row" }],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 380558000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            'SELECT id FROM [30 AS namespace] WHERE (("parentID" = $1) AND (name = $2)) AND ("parentSchemaID" IN (_, _))',
          app: "$ internal-crdb-internal-get-descriptor-id",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "119",
        first_attempt_count: "119",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: {
          mean: 0.0007582605042016805,
          squared_diffs: 0.0012899036689243693,
        },
        run_lat: {
          mean: 0.0025542436974789933,
          squared_diffs: 0.02352969660793276,
        },
        service_lat: {
          mean: 0.005352453781512606,
          squared_diffs: 0.029015604745495804,
        },
        overhead_lat: {
          mean: 0.002039949579831932,
          squared_diffs: 0.00348424909769748,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "scan",
            attrs: [
              { key: "missing stats", value: "" },
              { key: "table", value: "namespace2@primary" },
              { key: "spans", value: "2 spans" },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 379399000,
          },
        },
        bytes_read: {
          mean: 42.40336134453781,
          squared_diffs: 4754.638655462186,
        },
        rows_read: { mean: 1, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            'INSERT INTO system.public.lease("descID", version, "nodeID", expiration) VALUES (_, _, __more2__)',
          app: "$ internal-lease-insert",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "682",
        first_attempt_count: "682",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 1, squared_diffs: 0 },
        parse_lat: {
          mean: 0.00007074780058651027,
          squared_diffs: 0.00001326794462170088,
        },
        plan_lat: {
          mean: 0.0012545674486803555,
          squared_diffs: 0.0045494564853973615,
        },
        run_lat: {
          mean: 0.0006522155425219945,
          squared_diffs: 0.0016887245713152483,
        },
        service_lat: {
          mean: 0.00214034017595308,
          squared_diffs: 0.006445689617079175,
        },
        overhead_lat: {
          mean: 0.000162809384164223,
          squared_diffs: 0.00015944438121994134,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "insert",
            attrs: [
              {
                key: "into",
                value: "lease(descID, version, nodeID, expiration)",
              },
            ],
            children: [
              {
                name: "values",
                attrs: [{ key: "size", value: "4 columns, 1 row" }],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943718",
            nanos: 768961000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            'SELECT count(_), max("timestamp") FROM [DELETE FROM system.rangelog WHERE ("timestamp" >= $1) AND ("timestamp" <= $2) LIMIT _ RETURNING "timestamp"]',
          app: "$ internal-rangelog-gc",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "6",
        first_attempt_count: "6",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: { mean: 0.000853, squared_diffs: 7.727e-8 },
        run_lat: {
          mean: 0.00036283333333333333,
          squared_diffs: 8.258833333333325e-9,
        },
        service_lat: {
          mean: 0.0028218333333333333,
          squared_diffs: 0.000001134138833333334,
        },
        overhead_lat: {
          mean: 0.0016059999999999998,
          squared_diffs: 7.091119999999998e-7,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "group (scalar)",
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      'DELETE FROM system.rangelog WHERE ("timestamp" >= $1) AND ("timestamp" <= $2) LIMIT 1000 RETURNING "timestamp"',
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1" }],
                    children: [
                      {
                        name: "delete",
                        attrs: [{ key: "from", value: "rangelog" }],
                        children: [
                          {
                            name: "scan",
                            attrs: [
                              { key: "missing stats", value: "" },
                              { key: "table", value: "rangelog@primary" },
                              { key: "spans", value: "1 span" },
                              { key: "limit", value: "1000" },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943422",
            nanos: 896748000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SELECT config FROM system.zones WHERE id = $1",
          app: "$ internal-crdb-internal-get-zone",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "61",
        first_attempt_count: "61",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: {
          mean: 0.003764688524590164,
          squared_diffs: 0.0063316190570819695,
        },
        run_lat: {
          mean: 0.0003758360655737705,
          squared_diffs: 0.000033302098360655735,
        },
        service_lat: {
          mean: 0.00812560655737705,
          squared_diffs: 0.01018266645655738,
        },
        overhead_lat: {
          mean: 0.003985081967213115,
          squared_diffs: 0.004243080270590162,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "scan",
            attrs: [
              { key: "missing stats", value: "" },
              { key: "table", value: "zones@primary" },
              { key: "spans", value: "1 span" },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 385603000,
          },
        },
        bytes_read: {
          mean: 26.29508196721311,
          squared_diffs: 38590.688524590165,
        },
        rows_read: {
          mean: 0.5245901639344264,
          squared_diffs: 15.213114754098365,
        },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.eventlog",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000414, squared_diffs: 0 },
        plan_lat: { mean: 0.003831, squared_diffs: 0 },
        run_lat: { mean: 0.032106, squared_diffs: 0 },
        service_lat: { mean: 0.036467, squared_diffs: 0 },
        overhead_lat: { mean: 0.00011599999999999805, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 761171000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.locations",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000441, squared_diffs: 0 },
        plan_lat: { mean: 0.00265, squared_diffs: 0 },
        run_lat: { mean: 0.034257, squared_diffs: 0 },
        service_lat: { mean: 0.037727, squared_diffs: 0 },
        overhead_lat: { mean: 0.00037899999999999046, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 937708000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.web_sessions",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000559, squared_diffs: 0 },
        plan_lat: { mean: 0.003774, squared_diffs: 0 },
        run_lat: { mean: 0.097683, squared_diffs: 0 },
        service_lat: { mean: 0.102145, squared_diffs: 0 },
        overhead_lat: { mean: 0.00012899999999999023, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 206746000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.statement_diagnostics_requests",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000997, squared_diffs: 0 },
        plan_lat: { mean: 0.006424, squared_diffs: 0 },
        run_lat: { mean: 0.12682, squared_diffs: 0 },
        service_lat: { mean: 0.134874, squared_diffs: 0 },
        overhead_lat: { mean: 0.0006329999999999947, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 923163000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.ui",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.005011, squared_diffs: 0 },
        plan_lat: { mean: 0.034486, squared_diffs: 0 },
        run_lat: { mean: 0.02228, squared_diffs: 0 },
        service_lat: { mean: 0.061899, squared_diffs: 0 },
        overhead_lat: { mean: 0.00012199999999999711, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 45487000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.comments",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.001207, squared_diffs: 0 },
        plan_lat: { mean: 0.006613, squared_diffs: 0 },
        run_lat: { mean: 0.037457, squared_diffs: 0 },
        service_lat: { mean: 0.045379, squared_diffs: 0 },
        overhead_lat: { mean: 0.00010200000000000486, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 766451000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.jobs",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000288, squared_diffs: 0 },
        plan_lat: { mean: 0.00183, squared_diffs: 0 },
        run_lat: { mean: 0.026744, squared_diffs: 0 },
        service_lat: { mean: 0.028957, squared_diffs: 0 },
        overhead_lat: { mean: 0.00009500000000000133, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 768510000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.namespace2",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.00054, squared_diffs: 0 },
        plan_lat: { mean: 0.020332, squared_diffs: 0 },
        run_lat: { mean: 0.173362, squared_diffs: 0 },
        service_lat: { mean: 0.194774, squared_diffs: 0 },
        overhead_lat: { mean: 0.0005400000000000127, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 246721000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.lease",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000695, squared_diffs: 0 },
        plan_lat: { mean: 0.003461, squared_diffs: 0 },
        run_lat: { mean: 0.042193, squared_diffs: 0 },
        service_lat: { mean: 0.046542, squared_diffs: 0 },
        overhead_lat: { mean: 0.00019299999999999873, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 847284000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.reports_meta",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000469, squared_diffs: 0 },
        plan_lat: { mean: 0.003895, squared_diffs: 0 },
        run_lat: { mean: 0.078674, squared_diffs: 0 },
        service_lat: { mean: 0.083145, squared_diffs: 0 },
        overhead_lat: { mean: 0.00010699999999999599, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 368843000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.zones",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.002403, squared_diffs: 0 },
        plan_lat: { mean: 0.029095, squared_diffs: 0 },
        run_lat: { mean: 0.104953, squared_diffs: 0 },
        service_lat: { mean: 0.136841, squared_diffs: 0 },
        overhead_lat: { mean: 0.00039000000000000146, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 264690000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.namespace",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000661, squared_diffs: 0 },
        plan_lat: { mean: 0.003739, squared_diffs: 0 },
        run_lat: { mean: 0.194705, squared_diffs: 0 },
        service_lat: { mean: 0.199205, squared_diffs: 0 },
        overhead_lat: { mean: 0.00010000000000001674, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 104070000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.settings",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000445, squared_diffs: 0 },
        plan_lat: { mean: 0.004218, squared_diffs: 0 },
        run_lat: { mean: 0.095786, squared_diffs: 0 },
        service_lat: { mean: 0.100887, squared_diffs: 0 },
        overhead_lat: { mean: 0.00043800000000000783, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 652694000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.users",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000427, squared_diffs: 0 },
        plan_lat: { mean: 0.001816, squared_diffs: 0 },
        run_lat: { mean: 0.04373, squared_diffs: 0 },
        service_lat: { mean: 0.046049, squared_diffs: 0 },
        overhead_lat: { mean: 0.00007599999999999968, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 93025000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.replication_stats",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000457, squared_diffs: 0 },
        plan_lat: { mean: 0.010135, squared_diffs: 0 },
        run_lat: { mean: 0.099864, squared_diffs: 0 },
        service_lat: { mean: 0.11057, squared_diffs: 0 },
        overhead_lat: { mean: 0.00011400000000000299, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 215662000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.tenants",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000457, squared_diffs: 0 },
        plan_lat: { mean: 0.004679, squared_diffs: 0 },
        run_lat: { mean: 0.03348, squared_diffs: 0 },
        service_lat: { mean: 0.038775, squared_diffs: 0 },
        overhead_lat: { mean: 0.00015899999999999248, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 945653000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.rangelog",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000526, squared_diffs: 0 },
        plan_lat: { mean: 0.002841, squared_diffs: 0 },
        run_lat: { mean: 0.031625, squared_diffs: 0 },
        service_lat: { mean: 0.035114, squared_diffs: 0 },
        overhead_lat: { mean: 0.00012199999999999711, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 907355000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.protected_ts_meta",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000412, squared_diffs: 0 },
        plan_lat: { mean: 0.010951, squared_diffs: 0 },
        run_lat: { mean: 0.033675, squared_diffs: 0 },
        service_lat: { mean: 0.045131, squared_diffs: 0 },
        overhead_lat: { mean: 0.0000930000000000028, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 912592000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.replication_constraint_stats",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000458, squared_diffs: 0 },
        plan_lat: { mean: 0.002082, squared_diffs: 0 },
        run_lat: { mean: 0.162296, squared_diffs: 0 },
        service_lat: { mean: 0.164941, squared_diffs: 0 },
        overhead_lat: { mean: 0.00010500000000002174, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 49458000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.role_options",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000461, squared_diffs: 0 },
        plan_lat: { mean: 0.001999, squared_diffs: 0 },
        run_lat: { mean: 0.135899, squared_diffs: 0 },
        service_lat: { mean: 0.138465, squared_diffs: 0 },
        overhead_lat: { mean: 0.00010600000000002274, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 460165000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.statement_bundle_chunks",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000516, squared_diffs: 0 },
        plan_lat: { mean: 0.002062, squared_diffs: 0 },
        run_lat: { mean: 0.015516, squared_diffs: 0 },
        service_lat: { mean: 0.018232, squared_diffs: 0 },
        overhead_lat: { mean: 0.0001380000000000027, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 666868000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.descriptor",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.003215, squared_diffs: 0 },
        plan_lat: { mean: 0.024413, squared_diffs: 0 },
        run_lat: { mean: 0.079061, squared_diffs: 0 },
        service_lat: { mean: 0.107376, squared_diffs: 0 },
        overhead_lat: { mean: 0.0006869999999999932, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 828952000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.protected_ts_records",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000423, squared_diffs: 0 },
        plan_lat: { mean: 0.002129, squared_diffs: 0 },
        run_lat: { mean: 0.023868, squared_diffs: 0 },
        service_lat: { mean: 0.026505, squared_diffs: 0 },
        overhead_lat: { mean: 0.00008500000000000174, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 892244000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.replication_critical_localities",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.0005, squared_diffs: 0 },
        plan_lat: { mean: 0.065096, squared_diffs: 0 },
        run_lat: { mean: 0.111178, squared_diffs: 0 },
        service_lat: { mean: 0.176911, squared_diffs: 0 },
        overhead_lat: { mean: 0.000137000000000026, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 217101000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.sqlliveness",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000501, squared_diffs: 0 },
        plan_lat: { mean: 0.002216, squared_diffs: 0 },
        run_lat: { mean: 0.115298, squared_diffs: 0 },
        service_lat: { mean: 0.118143, squared_diffs: 0 },
        overhead_lat: { mean: 0.0001280000000000031, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 781129000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.table_statistics",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000484, squared_diffs: 0 },
        plan_lat: { mean: 0.006928, squared_diffs: 0 },
        run_lat: { mean: 0.112855, squared_diffs: 0 },
        service_lat: { mean: 0.120365, squared_diffs: 0 },
        overhead_lat: { mean: 0.00009800000000000086, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 945349000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.role_members",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000451, squared_diffs: 0 },
        plan_lat: { mean: 0.009895, squared_diffs: 0 },
        run_lat: { mean: 0.086292, squared_diffs: 0 },
        service_lat: { mean: 0.096733, squared_diffs: 0 },
        overhead_lat: { mean: 0.00009500000000001174, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 355415000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          id: "ba29a6d105491afdc2671ca4bd28ee5a",
          query: "SHOW COLUMNS FROM system.scheduled_jobs",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000462, squared_diffs: 0 },
        plan_lat: { mean: 0.003201, squared_diffs: 0 },
        run_lat: { mean: 0.099945, squared_diffs: 0 },
        service_lat: { mean: 0.103731, squared_diffs: 0 },
        overhead_lat: { mean: 0.0001229999999999981, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 565957000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW COLUMNS FROM system.statement_diagnostics",
          app: "$ internal-admin-show-columns",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000474, squared_diffs: 0 },
        plan_lat: { mean: 0.003931, squared_diffs: 0 },
        run_lat: { mean: 0.022, squared_diffs: 0 },
        service_lat: { mean: 0.026505, squared_diffs: 0 },
        overhead_lat: { mean: 0.00010000000000000286, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "group",
                attrs: [
                  {
                    key: "group by",
                    value:
                      "column_name, ordinal_position, column_default, is_nullable, generation_expression, is_hidden, crdb_sql_type",
                  },
                  { key: "ordered", value: "+ordinal_position" },
                ],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "+ordinal_position" }],
                    children: [
                      {
                        name: "hash join (left outer)",
                        attrs: [
                          {
                            key: "equality",
                            value: "(column_name) = (column_name)",
                          },
                        ],
                        children: [
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "columns@primary" },
                                ],
                              },
                            ],
                          },
                          {
                            name: "filter",
                            attrs: [
                              {
                                key: "filter",
                                value:
                                  "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                              },
                            ],
                            children: [
                              {
                                name: "virtual table",
                                attrs: [
                                  { key: "table", value: "statistics@primary" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 751958000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            "SELECT id, statement_fingerprint FROM system.statement_diagnostics_requests WHERE completed = _",
          app: "$ internal-stmt-diag-poll",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "331",
        first_attempt_count: "331",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: {
          mean: 0.0001906163141993958,
          squared_diffs: 0.00001612117227190333,
        },
        plan_lat: {
          mean: 0.004582574018126888,
          squared_diffs: 1.1629237423169367,
        },
        run_lat: {
          mean: 0.00025790332326284024,
          squared_diffs: 0.000015640606906344407,
        },
        service_lat: {
          mean: 0.005230694864048336,
          squared_diffs: 1.1651088958061817,
        },
        overhead_lat: {
          mean: 0.00019960120845921453,
          squared_diffs: 0.000014930455359516633,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "scan",
            attrs: [
              { key: "missing stats", value: "" },
              {
                key: "table",
                value: "statement_diagnostics_requests@completed_idx",
              },
              { key: "spans", value: "1 span" },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943733",
            nanos: 586888000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            'UPSERT INTO system.reports_meta(id, "generated") VALUES ($1, $2)',
          app: "$ internal-timestamp-upsert-replication-critical-localities",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "55",
        first_attempt_count: "55",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 1, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: {
          mean: 0.0007186727272727273,
          squared_diffs: 0.000003653578109090909,
        },
        run_lat: {
          mean: 0.0003424727272727272,
          squared_diffs: 0.0000012782317090909095,
        },
        service_lat: {
          mean: 0.002475581818181819,
          squared_diffs: 0.0002241323273818182,
        },
        overhead_lat: {
          mean: 0.0014144363636363635,
          squared_diffs: 0.00020333138352727275,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "upsert",
            attrs: [{ key: "into", value: "reports_meta(id, generated)" }],
            children: [
              {
                name: "values",
                attrs: [{ key: "size", value: "2 columns, 1 row" }],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943469",
            nanos: 432344000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.protected_ts_meta",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000018, squared_diffs: 0 },
        plan_lat: { mean: 0.01045, squared_diffs: 0 },
        run_lat: { mean: 0.097167, squared_diffs: 0 },
        service_lat: { mean: 0.107762, squared_diffs: 0 },
        overhead_lat: { mean: 0.00012699999999998823, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'protected_ts_meta')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 103892000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.reports_meta",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000016, squared_diffs: 0 },
        plan_lat: { mean: 0.001906, squared_diffs: 0 },
        run_lat: { mean: 0.047226, squared_diffs: 0 },
        service_lat: { mean: 0.049237, squared_diffs: 0 },
        overhead_lat: { mean: 0.00008900000000000574, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'reports_meta')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 504887000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.role_options",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000027, squared_diffs: 0 },
        plan_lat: { mean: 0.00395, squared_diffs: 0 },
        run_lat: { mean: 0.03461, squared_diffs: 0 },
        service_lat: { mean: 0.03916, squared_diffs: 0 },
        overhead_lat: { mean: 0.0005729999999999971, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'role_options')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 653903000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.table_statistics",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.00002, squared_diffs: 0 },
        plan_lat: { mean: 0.028337, squared_diffs: 0 },
        run_lat: { mean: 0.034247, squared_diffs: 0 },
        service_lat: { mean: 0.062721, squared_diffs: 0 },
        overhead_lat: { mean: 0.00011700000000000599, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'table_statistics')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 53203000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.comments",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000473, squared_diffs: 0 },
        plan_lat: { mean: 0.004904, squared_diffs: 0 },
        run_lat: { mean: 0.035133, squared_diffs: 0 },
        service_lat: { mean: 0.040638, squared_diffs: 0 },
        overhead_lat: { mean: 0.0001280000000000031, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'comments')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 847173000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.namespace",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.00002, squared_diffs: 0 },
        plan_lat: { mean: 0.002146, squared_diffs: 0 },
        run_lat: { mean: 0.05528, squared_diffs: 0 },
        service_lat: { mean: 0.057559, squared_diffs: 0 },
        overhead_lat: { mean: 0.00011299999999999505, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'namespace')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 313142000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.replication_constraint_stats",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000022, squared_diffs: 0 },
        plan_lat: { mean: 0.004239, squared_diffs: 0 },
        run_lat: { mean: 0.180832, squared_diffs: 0 },
        service_lat: { mean: 0.185231, squared_diffs: 0 },
        overhead_lat: { mean: 0.000138000000000027, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'replication_constraint_stats')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 256841000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.zones",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000019, squared_diffs: 0 },
        plan_lat: { mean: 0.002354, squared_diffs: 0 },
        run_lat: { mean: 0.012203, squared_diffs: 0 },
        service_lat: { mean: 0.014718, squared_diffs: 0 },
        overhead_lat: { mean: 0.00014199999999999977, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'zones')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 298111000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.tenants",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000012, squared_diffs: 0 },
        plan_lat: { mean: 0.001501, squared_diffs: 0 },
        run_lat: { mean: 0.063077, squared_diffs: 0 },
        service_lat: { mean: 0.064684, squared_diffs: 0 },
        overhead_lat: { mean: 0.00009400000000001074, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'tenants')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 117092000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.web_sessions",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000017, squared_diffs: 0 },
        plan_lat: { mean: 0.015154, squared_diffs: 0 },
        run_lat: { mean: 0.012225, squared_diffs: 0 },
        service_lat: { mean: 0.027499, squared_diffs: 0 },
        overhead_lat: { mean: 0.00010299999999999893, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'web_sessions')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 308360000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.jobs",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.00087, squared_diffs: 0 },
        plan_lat: { mean: 0.005402, squared_diffs: 0 },
        run_lat: { mean: 0.033861, squared_diffs: 0 },
        service_lat: { mean: 0.040245, squared_diffs: 0 },
        overhead_lat: { mean: 0.00011200000000000099, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'jobs')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 864016000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          id: "ba29a6d105491afdc2671ca4bd28ee5Q",
          query: "SHOW CREATE system.descriptor",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000015, squared_diffs: 0 },
        plan_lat: { mean: 0.011168, squared_diffs: 0 },
        run_lat: { mean: 0.07207, squared_diffs: 0 },
        service_lat: { mean: 0.083404, squared_diffs: 0 },
        overhead_lat: { mean: 0.00015100000000001224, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'descriptor')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 946170000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.protected_ts_records",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000015, squared_diffs: 0 },
        plan_lat: { mean: 0.001779, squared_diffs: 0 },
        run_lat: { mean: 0.061521, squared_diffs: 0 },
        service_lat: { mean: 0.06344, squared_diffs: 0 },
        overhead_lat: { mean: 0.0001250000000000001, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'protected_ts_records')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 994147000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.replication_critical_localities",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000015, squared_diffs: 0 },
        plan_lat: { mean: 0.021026, squared_diffs: 0 },
        run_lat: { mean: 0.091852, squared_diffs: 0 },
        service_lat: { mean: 0.113004, squared_diffs: 0 },
        overhead_lat: { mean: 0.00011099999999998611, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'replication_critical_localities')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 440204000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.role_members",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000015, squared_diffs: 0 },
        plan_lat: { mean: 0.0015, squared_diffs: 0 },
        run_lat: { mean: 0.013039, squared_diffs: 0 },
        service_lat: { mean: 0.014627, squared_diffs: 0 },
        overhead_lat: { mean: 0.00007299999999999841, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'role_members')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 468584000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.statement_diagnostics_requests",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000012, squared_diffs: 0 },
        plan_lat: { mean: 0.0022, squared_diffs: 0 },
        run_lat: { mean: 0.057433, squared_diffs: 0 },
        service_lat: { mean: 0.059743, squared_diffs: 0 },
        overhead_lat: { mean: 0.00009800000000000086, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'statement_diagnostics_requests')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: { seconds: "1598943061", nanos: 7317000 },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.lease",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000023, squared_diffs: 0 },
        plan_lat: { mean: 0.002106, squared_diffs: 0 },
        run_lat: { mean: 0.012943, squared_diffs: 0 },
        service_lat: { mean: 0.015226, squared_diffs: 0 },
        overhead_lat: { mean: 0.00015400000000000136, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'lease')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 886587000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.statement_diagnostics",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000015, squared_diffs: 0 },
        plan_lat: { mean: 0.001833, squared_diffs: 0 },
        run_lat: { mean: 0.00961, squared_diffs: 0 },
        service_lat: { mean: 0.012134, squared_diffs: 0 },
        overhead_lat: { mean: 0.0006759999999999995, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'statement_diagnostics')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 947597000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.eventlog",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000019, squared_diffs: 0 },
        plan_lat: { mean: 0.001927, squared_diffs: 0 },
        run_lat: { mean: 0.132535, squared_diffs: 0 },
        service_lat: { mean: 0.134584, squared_diffs: 0 },
        overhead_lat: { mean: 0.00010300000000001974, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'eventlog')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 949509000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.locations",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.00005, squared_diffs: 0 },
        plan_lat: { mean: 0.012098, squared_diffs: 0 },
        run_lat: { mean: 0.05219, squared_diffs: 0 },
        service_lat: { mean: 0.064517, squared_diffs: 0 },
        overhead_lat: { mean: 0.0001789999999999986, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'locations')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 242720000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.namespace2",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000036, squared_diffs: 0 },
        plan_lat: { mean: 0.001264, squared_diffs: 0 },
        run_lat: { mean: 0.010833, squared_diffs: 0 },
        service_lat: { mean: 0.012211, squared_diffs: 0 },
        overhead_lat: { mean: 0.00007799999999999821, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'namespace2')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 314212000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.sqlliveness",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000021, squared_diffs: 0 },
        plan_lat: { mean: 0.005978, squared_diffs: 0 },
        run_lat: { mean: 0.1243, squared_diffs: 0 },
        service_lat: { mean: 0.130409, squared_diffs: 0 },
        overhead_lat: { mean: 0.00010999999999999899, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'sqlliveness')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 945268000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.ui",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000012, squared_diffs: 0 },
        plan_lat: { mean: 0.006862, squared_diffs: 0 },
        run_lat: { mean: 0.022711, squared_diffs: 0 },
        service_lat: { mean: 0.029661, squared_diffs: 0 },
        overhead_lat: { mean: 0.00007599999999999968, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'ui')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 115799000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.rangelog",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000023, squared_diffs: 0 },
        plan_lat: { mean: 0.00263, squared_diffs: 0 },
        run_lat: { mean: 0.019104, squared_diffs: 0 },
        service_lat: { mean: 0.021898, squared_diffs: 0 },
        overhead_lat: { mean: 0.00014100000000000223, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'rangelog')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 967771000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.users",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.00005, squared_diffs: 0 },
        plan_lat: { mean: 0.006261, squared_diffs: 0 },
        run_lat: { mean: 0.037875, squared_diffs: 0 },
        service_lat: { mean: 0.044297, squared_diffs: 0 },
        overhead_lat: { mean: 0.00011100000000000693, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'users')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 191958000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.replication_stats",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000018, squared_diffs: 0 },
        plan_lat: { mean: 0.002168, squared_diffs: 0 },
        run_lat: { mean: 0.109775, squared_diffs: 0 },
        service_lat: { mean: 0.112113, squared_diffs: 0 },
        overhead_lat: { mean: 0.00015200000000001324, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'replication_stats')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 452697000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.scheduled_jobs",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000022, squared_diffs: 0 },
        plan_lat: { mean: 0.01226, squared_diffs: 0 },
        run_lat: { mean: 0.033377, squared_diffs: 0 },
        service_lat: { mean: 0.045753, squared_diffs: 0 },
        overhead_lat: { mean: 0.0000940000000000038, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'scheduled_jobs')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 693097000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.statement_bundle_chunks",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000013, squared_diffs: 0 },
        plan_lat: { mean: 0.001699, squared_diffs: 0 },
        run_lat: { mean: 0.025196, squared_diffs: 0 },
        service_lat: { mean: 0.027016, squared_diffs: 0 },
        overhead_lat: { mean: 0.00010799999999999699, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'statement_bundle_chunks')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 730263000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW CREATE system.settings",
          app: "$ internal-admin-show-create",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000021, squared_diffs: 0 },
        plan_lat: { mean: 0.001973, squared_diffs: 0 },
        run_lat: { mean: 0.011146, squared_diffs: 0 },
        service_lat: { mean: 0.013298, squared_diffs: 0 },
        overhead_lat: { mean: 0.0001580000000000019, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "root",
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "virtual table",
                    attrs: [
                      {
                        key: "table",
                        value:
                          "create_statements@create_statements_descriptor_id_idx",
                      },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S1" },
                  {
                    key: "original sql",
                    value:
                      "SELECT string_agg(raw_config_sql, e';\\n') FROM crdb_internal.zones WHERE (((database_name = 'system') AND (table_name = 'settings')) AND (raw_config_yaml IS NOT NULL)) AND (raw_config_sql IS NOT NULL)",
                  },
                  { key: "exec mode", value: "all rows" },
                ],
                children: [
                  {
                    name: "buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                    children: [
                      {
                        name: "group (scalar)",
                        children: [
                          {
                            name: "render",
                            children: [
                              {
                                name: "filter",
                                attrs: [
                                  {
                                    key: "filter",
                                    value:
                                      "((database_name = _) AND (table_name = _)) AND (raw_config_sql IS NOT NULL)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      { key: "table", value: "zones@primary" },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S2" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
              {
                name: "subquery",
                attrs: [
                  { key: "id", value: "@S3" },
                  {
                    key: "original sql",
                    value: "(SELECT * FROM zone_configs)",
                  },
                  { key: "exec mode", value: "one row" },
                ],
                children: [
                  {
                    name: "scan buffer",
                    attrs: [{ key: "label", value: "buffer 1 (zone_configs)" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 735882000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            'SELECT key, value, "lastUpdated" FROM system.ui WHERE key IN ($1, $2)',
          app: "$ internal-admin-getUIData",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "11",
        first_attempt_count: "11",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: {
          mean: 0.0010596363636363635,
          squared_diffs: 0.0000022283505454545456,
        },
        run_lat: {
          mean: 0.0003193636363636364,
          squared_diffs: 2.856965454545455e-7,
        },
        service_lat: {
          mean: 0.003567090909090909,
          squared_diffs: 0.00001528874890909091,
        },
        overhead_lat: {
          mean: 0.0021880909090909095,
          squared_diffs: 0.000004449138909090909,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "scan",
            attrs: [
              { key: "missing stats", value: "" },
              { key: "table", value: "ui@primary" },
              { key: "spans", value: "2 spans" },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943682",
            nanos: 934406000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            'SELECT key, value, "lastUpdated" FROM system.ui WHERE key IN ($1,)',
          app: "$ internal-admin-getUIData",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "7",
        first_attempt_count: "7",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: {
          mean: 0.0012702857142857142,
          squared_diffs: 9.447014285714286e-7,
        },
        run_lat: {
          mean: 0.00031542857142857143,
          squared_diffs: 5.337971428571427e-8,
        },
        service_lat: {
          mean: 0.004006428571428572,
          squared_diffs: 0.0000027454797142857153,
        },
        overhead_lat: {
          mean: 0.0024207142857142856,
          squared_diffs: 0.0000021153874285714294,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "scan",
            attrs: [
              { key: "missing stats", value: "" },
              { key: "table", value: "ui@primary" },
              { key: "spans", value: "1 span" },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943681",
            nanos: 543344000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.namespace2",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000555, squared_diffs: 0 },
        plan_lat: { mean: 0.00231, squared_diffs: 0 },
        run_lat: { mean: 0.00476, squared_diffs: 0 },
        service_lat: { mean: 0.007818, squared_diffs: 0 },
        overhead_lat: { mean: 0.00019300000000000046, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 254659000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.reports_meta",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000016, squared_diffs: 0 },
        plan_lat: { mean: 0.021559, squared_diffs: 0 },
        run_lat: { mean: 0.016196, squared_diffs: 0 },
        service_lat: { mean: 0.037891, squared_diffs: 0 },
        overhead_lat: { mean: 0.00012000000000000205, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 406882000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.sqlliveness",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000013, squared_diffs: 0 },
        plan_lat: { mean: 0.00107, squared_diffs: 0 },
        run_lat: { mean: 0.014953, squared_diffs: 0 },
        service_lat: { mean: 0.016129, squared_diffs: 0 },
        overhead_lat: { mean: 0.0000930000000000028, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 797382000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.statement_diagnostics_requests",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000023, squared_diffs: 0 },
        plan_lat: { mean: 0.002328, squared_diffs: 0 },
        run_lat: { mean: 0.007135, squared_diffs: 0 },
        service_lat: { mean: 0.009606, squared_diffs: 0 },
        overhead_lat: { mean: 0.00012000000000000031, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 932924000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.tenants",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000011, squared_diffs: 0 },
        plan_lat: { mean: 0.073669, squared_diffs: 0 },
        run_lat: { mean: 0.009051, squared_diffs: 0 },
        service_lat: { mean: 0.082808, squared_diffs: 0 },
        overhead_lat: { mean: 0.00007700000000000762, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 28557000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.web_sessions",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000237, squared_diffs: 0 },
        plan_lat: { mean: 0.001634, squared_diffs: 0 },
        run_lat: { mean: 0.043296, squared_diffs: 0 },
        service_lat: { mean: 0.045302, squared_diffs: 0 },
        overhead_lat: { mean: 0.00013500000000000317, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 252226000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.scheduled_jobs",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000256, squared_diffs: 0 },
        plan_lat: { mean: 0.013818, squared_diffs: 0 },
        run_lat: { mean: 0.011419, squared_diffs: 0 },
        service_lat: { mean: 0.026388, squared_diffs: 0 },
        overhead_lat: { mean: 0.000895, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 592931000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.protected_ts_records",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000016, squared_diffs: 0 },
        plan_lat: { mean: 0.012081, squared_diffs: 0 },
        run_lat: { mean: 0.004639, squared_diffs: 0 },
        service_lat: { mean: 0.017115, squared_diffs: 0 },
        overhead_lat: { mean: 0.0003789999999999974, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 909521000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.statement_bundle_chunks",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000015, squared_diffs: 0 },
        plan_lat: { mean: 0.005625, squared_diffs: 0 },
        run_lat: { mean: 0.005797, squared_diffs: 0 },
        service_lat: { mean: 0.011517, squared_diffs: 0 },
        overhead_lat: { mean: 0.00008000000000000021, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 678665000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.ui",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.00005, squared_diffs: 0 },
        plan_lat: { mean: 0.001393, squared_diffs: 0 },
        run_lat: { mean: 0.004125, squared_diffs: 0 },
        service_lat: { mean: 0.005903, squared_diffs: 0 },
        overhead_lat: { mean: 0.00033500000000000023, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 51830000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.lease",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000013, squared_diffs: 0 },
        plan_lat: { mean: 0.002573, squared_diffs: 0 },
        run_lat: { mean: 0.006052, squared_diffs: 0 },
        service_lat: { mean: 0.008729, squared_diffs: 0 },
        overhead_lat: { mean: 0.0000910000000000008, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 856115000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.namespace",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000441, squared_diffs: 0 },
        plan_lat: { mean: 0.129542, squared_diffs: 0 },
        run_lat: { mean: 0.010513, squared_diffs: 0 },
        service_lat: { mean: 0.140639, squared_diffs: 0 },
        overhead_lat: { mean: 0.00014300000000000423, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 244953000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.rangelog",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000019, squared_diffs: 0 },
        plan_lat: { mean: 0.018433, squared_diffs: 0 },
        run_lat: { mean: 0.005504, squared_diffs: 0 },
        service_lat: { mean: 0.024055, squared_diffs: 0 },
        overhead_lat: { mean: 0.00009899999999999493, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 931533000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.role_options",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000148, squared_diffs: 0 },
        plan_lat: { mean: 0.001063, squared_diffs: 0 },
        run_lat: { mean: 0.052481, squared_diffs: 0 },
        service_lat: { mean: 0.053788, squared_diffs: 0 },
        overhead_lat: { mean: 0.0000960000000000058, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 514109000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.table_statistics",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000012, squared_diffs: 0 },
        plan_lat: { mean: 0.002013, squared_diffs: 0 },
        run_lat: { mean: 0.005896, squared_diffs: 0 },
        service_lat: { mean: 0.007991, squared_diffs: 0 },
        overhead_lat: { mean: 0.00006999999999999888, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 953428000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.users",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000017, squared_diffs: 0 },
        plan_lat: { mean: 0.004471, squared_diffs: 0 },
        run_lat: { mean: 0.013476, squared_diffs: 0 },
        service_lat: { mean: 0.018061, squared_diffs: 0 },
        overhead_lat: { mean: 0.00009699999999999986, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 111192000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.zones",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000271, squared_diffs: 0 },
        plan_lat: { mean: 0.002959, squared_diffs: 0 },
        run_lat: { mean: 0.00442, squared_diffs: 0 },
        service_lat: { mean: 0.00802, squared_diffs: 0 },
        overhead_lat: { mean: 0.0003699999999999988, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943061",
            nanos: 272974000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.statement_diagnostics",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000019, squared_diffs: 0 },
        plan_lat: { mean: 0.026521, squared_diffs: 0 },
        run_lat: { mean: 0.037356, squared_diffs: 0 },
        service_lat: { mean: 0.064024, squared_diffs: 0 },
        overhead_lat: { mean: 0.00012799999999998923, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 816146000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.protected_ts_meta",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000014, squared_diffs: 0 },
        plan_lat: { mean: 0.0022, squared_diffs: 0 },
        run_lat: { mean: 0.052709, squared_diffs: 0 },
        service_lat: { mean: 0.055034, squared_diffs: 0 },
        overhead_lat: { mean: 0.00011099999999999999, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 967757000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.replication_constraint_stats",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000016, squared_diffs: 0 },
        plan_lat: { mean: 0.001322, squared_diffs: 0 },
        run_lat: { mean: 0.005793, squared_diffs: 0 },
        service_lat: { mean: 0.007248, squared_diffs: 0 },
        overhead_lat: { mean: 0.00011699999999999992, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 56850000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.replication_stats",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000017, squared_diffs: 0 },
        plan_lat: { mean: 0.001647, squared_diffs: 0 },
        run_lat: { mean: 0.00876, squared_diffs: 0 },
        service_lat: { mean: 0.010537, squared_diffs: 0 },
        overhead_lat: { mean: 0.00011299999999999852, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 226341000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.comments",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000018, squared_diffs: 0 },
        plan_lat: { mean: 0.001483, squared_diffs: 0 },
        run_lat: { mean: 0.009822, squared_diffs: 0 },
        service_lat: { mean: 0.011452, squared_diffs: 0 },
        overhead_lat: { mean: 0.00012900000000000064, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 779147000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.eventlog",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000026, squared_diffs: 0 },
        plan_lat: { mean: 0.001505, squared_diffs: 0 },
        run_lat: { mean: 0.023439, squared_diffs: 0 },
        service_lat: { mean: 0.025119, squared_diffs: 0 },
        overhead_lat: { mean: 0.00014899999999999636, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 786544000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.jobs",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000013, squared_diffs: 0 },
        plan_lat: { mean: 0.001421, squared_diffs: 0 },
        run_lat: { mean: 0.018279, squared_diffs: 0 },
        service_lat: { mean: 0.019808, squared_diffs: 0 },
        overhead_lat: { mean: 0.00009499999999999786, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 788434000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.descriptor",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000018, squared_diffs: 0 },
        plan_lat: { mean: 0.001899, squared_diffs: 0 },
        run_lat: { mean: 0.00605, squared_diffs: 0 },
        service_lat: { mean: 0.008114, squared_diffs: 0 },
        overhead_lat: { mean: 0.00014699999999999956, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 837201000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.locations",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000014, squared_diffs: 0 },
        plan_lat: { mean: 0.001243, squared_diffs: 0 },
        run_lat: { mean: 0.172579, squared_diffs: 0 },
        service_lat: { mean: 0.17395, squared_diffs: 0 },
        overhead_lat: { mean: 0.00011399999999997523, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943059",
            nanos: 111805000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.replication_critical_localities",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000016, squared_diffs: 0 },
        plan_lat: { mean: 0.001568, squared_diffs: 0 },
        run_lat: { mean: 0.017593, squared_diffs: 0 },
        service_lat: { mean: 0.019481, squared_diffs: 0 },
        overhead_lat: { mean: 0.0003039999999999987, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 236765000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.role_members",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000026, squared_diffs: 0 },
        plan_lat: { mean: 0.001643, squared_diffs: 0 },
        run_lat: { mean: 0.064337, squared_diffs: 0 },
        service_lat: { mean: 0.066135, squared_diffs: 0 },
        overhead_lat: { mean: 0.00012899999999999023, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 422111000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW INDEXES FROM system.settings",
          app: "$ internal-admin-showindex",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000015, squared_diffs: 0 },
        plan_lat: { mean: 0.00584, squared_diffs: 0 },
        run_lat: { mean: 0.008195, squared_diffs: 0 },
        service_lat: { mean: 0.014151, squared_diffs: 0 },
        overhead_lat: { mean: 0.0001010000000000004, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "filter",
                attrs: [
                  {
                    key: "filter",
                    value:
                      "((table_catalog = _) AND (table_schema = _)) AND (table_name = _)",
                  },
                ],
                children: [
                  {
                    name: "virtual table",
                    attrs: [{ key: "table", value: "statistics@primary" }],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943060",
            nanos: 666966000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            "SELECT id, statement_fingerprint, completed, statement_diagnostics_id, requested_at FROM system.statement_diagnostics_requests",
          app: "$ internal-stmt-diag-get-all",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "9",
        first_attempt_count: "9",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: {
          mean: 0.0006673333333333334,
          squared_diffs: 8.486799999999999e-7,
        },
        plan_lat: { mean: 0.001763, squared_diffs: 0.000009265388000000003 },
        run_lat: {
          mean: 0.00044855555555555556,
          squared_diffs: 0.0000012581222222222223,
        },
        service_lat: {
          mean: 0.0031185555555555554,
          squared_diffs: 0.00001867617822222222,
        },
        overhead_lat: {
          mean: 0.00023966666666666678,
          squared_diffs: 1.6338000000000005e-7,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "scan",
            attrs: [
              { key: "missing stats", value: "" },
              { key: "table", value: "statement_diagnostics_requests@primary" },
              { key: "spans", value: "FULL SCAN" },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943736",
            nanos: 886032000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            "UPDATE sqlliveness SET expiration = $1 WHERE session_id = $2 RETURNING session_id",
          app: "$ internal-update-session",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "657",
        first_attempt_count: "657",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: {
          mean: 0.0006676575342465744,
          squared_diffs: 0.00024715568394520563,
        },
        run_lat: {
          mean: 0.0008919345509893462,
          squared_diffs: 0.0008394576561856932,
        },
        service_lat: {
          mean: 0.0027890700152207017,
          squared_diffs: 0.0020811043367792974,
        },
        overhead_lat: {
          mean: 0.00122947792998478,
          squared_diffs: 0.0005700058879299848,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "update",
            attrs: [
              { key: "table", value: "sqlliveness" },
              { key: "set", value: "expiration" },
            ],
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "scan",
                    attrs: [
                      { key: "missing stats", value: "" },
                      { key: "table", value: "sqlliveness@primary" },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943441",
            nanos: 770086000,
          },
        },
        bytes_read: {
          mean: 60.81430745814303,
          squared_diffs: 7419.345509893456,
        },
        rows_read: {
          mean: 0.9969558599695585,
          squared_diffs: 1.9939117199391176,
        },
      },
    },
    {
      key: {
        key_data: {
          query:
            "UPDATE sqlliveness SET expiration = $1 WHERE session_id = $2 RETURNING session_id",
          app: "$ internal-update-session",
          distSQL: false,
          failed: true,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: { mean: 0.000955, squared_diffs: 0 },
        run_lat: { mean: 0.233372, squared_diffs: 0 },
        service_lat: { mean: 1.604014, squared_diffs: 0 },
        overhead_lat: { mean: 1.369687, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err:
            'TransactionRetryWithProtoRefreshError: TransactionRetryError: retry txn (RETRY_WRITE_TOO_OLD - WriteTooOld flag converted to WriteTooOldError): "unnamed" meta={id=02e4a990 key=/Table/39/1/"S\\xc8{\\x1fb8FӖ\\xf1R\\x91T\\b4>"/0 pri=0.02036542 epo=0 ts=1598942533.112716000,1 min=1598942532.165235000,0 seq=1} lock=true stat=PENDING rts=1598942532.165235000,0 wto=false max=1598942532.165235000,0',
          most_recent_plan_description: {
            name: "update",
            attrs: [
              { key: "table", value: "sqlliveness" },
              { key: "set", value: "expiration" },
            ],
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "scan",
                    attrs: [
                      { key: "missing stats", value: "" },
                      { key: "table", value: "sqlliveness@primary" },
                      { key: "spans", value: "1 span" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598942533",
            nanos: 769316000,
          },
        },
        bytes_read: { mean: 61, squared_diffs: 0 },
        rows_read: { mean: 1, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            "UPDATE system.jobs SET claim_session_id = _ WHERE NOT (crdb_internal.sql_liveness_is_alive(claim_session_id))",
          app: "$ internal-expire-sessions",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "111",
        first_attempt_count: "111",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: {
          mean: 0.06306306306306306,
          squared_diffs: 12.558558558558563,
        },
        parse_lat: {
          mean: 0.00024587387387387384,
          squared_diffs: 0.0000037932282342342335,
        },
        plan_lat: {
          mean: 0.00979827027027027,
          squared_diffs: 0.8597615968098918,
        },
        run_lat: {
          mean: 0.00801163063063063,
          squared_diffs: 0.39730854024785583,
        },
        service_lat: {
          mean: 0.01828468468468467,
          squared_diffs: 2.4378548223939633,
        },
        overhead_lat: {
          mean: 0.00022890990990990856,
          squared_diffs: 0.000020460215099097724,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "update",
            attrs: [
              { key: "table", value: "jobs" },
              { key: "set", value: "claim_session_id" },
              { key: "auto commit", value: "" },
            ],
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "filter",
                    attrs: [
                      {
                        key: "filter",
                        value:
                          "NOT crdb_internal.sql_liveness_is_alive(claim_session_id)",
                      },
                    ],
                    children: [
                      {
                        name: "scan",
                        attrs: [
                          { key: "missing stats", value: "" },
                          { key: "table", value: "jobs@primary" },
                          { key: "spans", value: "FULL SCAN" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943734",
            nanos: 671499000,
          },
        },
        bytes_read: { mean: 845, squared_diffs: 0 },
        rows_read: { mean: 2, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            'SELECT "timestamp", "eventType", "targetID", "reportingID", info, "uniqueID" FROM system.eventlog WHERE _ ORDER BY "timestamp" DESC LIMIT $1',
          app: "$ internal-admin-events",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "2",
        first_attempt_count: "2",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: { mean: 0.001372, squared_diffs: 3.432200000000002e-8 },
        run_lat: { mean: 0.001519, squared_diffs: 9.577279999999997e-7 },
        service_lat: {
          mean: 0.005518,
          squared_diffs: 0.0000024597620000000016,
        },
        overhead_lat: { mean: 0.002627, squared_diffs: 6.006080000000007e-7 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "revscan",
            attrs: [
              { key: "missing stats", value: "" },
              { key: "table", value: "eventlog@primary" },
              { key: "spans", value: "LIMITED SCAN" },
              { key: "limit", value: "1000" },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598942965",
            nanos: 353636000,
          },
        },
        bytes_read: { mean: 11283, squared_diffs: 0 },
        rows_read: { mean: 19, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW TABLES FROM defaultdb",
          app: "$ internal-admin-show-tables",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000008, squared_diffs: 0 },
        plan_lat: { mean: 0.007784, squared_diffs: 0 },
        run_lat: { mean: 0.033603, squared_diffs: 0 },
        service_lat: { mean: 0.04153, squared_diffs: 0 },
        overhead_lat: { mean: 0.00013499999999999623, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+relname" }],
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "hash join (right outer)",
                    attrs: [
                      { key: "equality", value: "(table_id) = (column44)" },
                    ],
                    children: [
                      {
                        name: "virtual table",
                        attrs: [
                          {
                            key: "table",
                            value: "table_row_statistics@primary",
                          },
                        ],
                      },
                      {
                        name: "render",
                        children: [
                          {
                            name: "hash join (left outer)",
                            attrs: [
                              { key: "equality", value: "(oid) = (objoid)" },
                            ],
                            children: [
                              {
                                name: "hash join",
                                attrs: [
                                  {
                                    key: "equality",
                                    value: "(relnamespace) = (oid)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "filter",
                                    attrs: [
                                      { key: "filter", value: "relkind IN _" },
                                    ],
                                    children: [
                                      {
                                        name: "virtual table",
                                        attrs: [
                                          {
                                            key: "table",
                                            value: "pg_class@primary",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    name: "filter",
                                    attrs: [
                                      { key: "filter", value: "nspname = _" },
                                    ],
                                    children: [
                                      {
                                        name: "virtual table",
                                        attrs: [
                                          {
                                            key: "table",
                                            value: "pg_namespace@primary",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                name: "filter",
                                attrs: [
                                  { key: "filter", value: "objsubid = _" },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      {
                                        key: "table",
                                        value: "pg_description@primary",
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 375037000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW TABLES FROM postgres",
          app: "$ internal-admin-show-tables",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000022, squared_diffs: 0 },
        plan_lat: { mean: 0.007783, squared_diffs: 0 },
        run_lat: { mean: 0.033619, squared_diffs: 0 },
        service_lat: { mean: 0.041563, squared_diffs: 0 },
        overhead_lat: { mean: 0.00013900000000000023, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+relname" }],
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "hash join (right outer)",
                    attrs: [
                      { key: "equality", value: "(table_id) = (column44)" },
                    ],
                    children: [
                      {
                        name: "virtual table",
                        attrs: [
                          {
                            key: "table",
                            value: "table_row_statistics@primary",
                          },
                        ],
                      },
                      {
                        name: "render",
                        children: [
                          {
                            name: "hash join (left outer)",
                            attrs: [
                              { key: "equality", value: "(oid) = (objoid)" },
                            ],
                            children: [
                              {
                                name: "hash join",
                                attrs: [
                                  {
                                    key: "equality",
                                    value: "(relnamespace) = (oid)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "filter",
                                    attrs: [
                                      { key: "filter", value: "relkind IN _" },
                                    ],
                                    children: [
                                      {
                                        name: "virtual table",
                                        attrs: [
                                          {
                                            key: "table",
                                            value: "pg_class@primary",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    name: "filter",
                                    attrs: [
                                      { key: "filter", value: "nspname = _" },
                                    ],
                                    children: [
                                      {
                                        name: "virtual table",
                                        attrs: [
                                          {
                                            key: "table",
                                            value: "pg_namespace@primary",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                name: "filter",
                                attrs: [
                                  { key: "filter", value: "objsubid = _" },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      {
                                        key: "table",
                                        value: "pg_description@primary",
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 375039000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SHOW TABLES FROM system",
          app: "$ internal-admin-show-tables",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000012, squared_diffs: 0 },
        plan_lat: { mean: 0.006311, squared_diffs: 0 },
        run_lat: { mean: 0.042592, squared_diffs: 0 },
        service_lat: { mean: 0.049058, squared_diffs: 0 },
        overhead_lat: { mean: 0.0001429999999999973, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "sort",
            attrs: [{ key: "order", value: "+relname" }],
            children: [
              {
                name: "render",
                children: [
                  {
                    name: "hash join (right outer)",
                    attrs: [
                      { key: "equality", value: "(table_id) = (column44)" },
                    ],
                    children: [
                      {
                        name: "virtual table",
                        attrs: [
                          {
                            key: "table",
                            value: "table_row_statistics@primary",
                          },
                        ],
                      },
                      {
                        name: "render",
                        children: [
                          {
                            name: "hash join (left outer)",
                            attrs: [
                              { key: "equality", value: "(oid) = (objoid)" },
                            ],
                            children: [
                              {
                                name: "hash join",
                                attrs: [
                                  {
                                    key: "equality",
                                    value: "(relnamespace) = (oid)",
                                  },
                                ],
                                children: [
                                  {
                                    name: "filter",
                                    attrs: [
                                      { key: "filter", value: "relkind IN _" },
                                    ],
                                    children: [
                                      {
                                        name: "virtual table",
                                        attrs: [
                                          {
                                            key: "table",
                                            value: "pg_class@primary",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    name: "filter",
                                    attrs: [
                                      { key: "filter", value: "nspname = _" },
                                    ],
                                    children: [
                                      {
                                        name: "virtual table",
                                        attrs: [
                                          {
                                            key: "table",
                                            value: "pg_namespace@primary",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                name: "filter",
                                attrs: [
                                  { key: "filter", value: "objsubid = _" },
                                ],
                                children: [
                                  {
                                    name: "virtual table",
                                    attrs: [
                                      {
                                        key: "table",
                                        value: "pg_description@primary",
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 384467000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            "SELECT type, object_id, sub_id, comment FROM system.comments WHERE object_id = _",
          app: "$ internal-show-tables-with-comment",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "58",
        first_attempt_count: "58",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: {
          mean: 0.0004590862068965516,
          squared_diffs: 0.00009875196656896552,
        },
        plan_lat: {
          mean: 0.009605913793103446,
          squared_diffs: 0.048884872482568946,
        },
        run_lat: {
          mean: 0.00224803448275862,
          squared_diffs: 0.006289115303931035,
        },
        service_lat: {
          mean: 0.012612568965517244,
          squared_diffs: 0.05722199285822415,
        },
        overhead_lat: {
          mean: 0.0002995344827586201,
          squared_diffs: 0.00004844961443103447,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "filter",
            attrs: [{ key: "filter", value: "object_id = _" }],
            children: [
              {
                name: "scan",
                attrs: [
                  { key: "missing stats", value: "" },
                  { key: "table", value: "comments@primary" },
                  { key: "spans", value: "FULL SCAN" },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 844862000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SELECT name FROM system.settings",
          app: "$ internal-read-setting",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0.000047, squared_diffs: 0 },
        plan_lat: { mean: 0.001611, squared_diffs: 0 },
        run_lat: { mean: 0.000322, squared_diffs: 0 },
        service_lat: { mean: 0.002144, squared_diffs: 0 },
        overhead_lat: { mean: 0.00016400000000000008, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "scan",
            attrs: [
              { key: "missing stats", value: "" },
              { key: "table", value: "settings@primary" },
              { key: "spans", value: "FULL SCAN" },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598938499",
            nanos: 110832000,
          },
        },
        bytes_read: { mean: 235, squared_diffs: 0 },
        rows_read: { mean: 3, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            "SELECT id FROM system.jobs WHERE ((status = $1) OR (status = $2)) AND ((claim_session_id = $3) AND (claim_instance_id = $4))",
          app: "$ internal-select-running/reverting-jobs",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "111",
        first_attempt_count: "111",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: {
          mean: 0.00132363963963964,
          squared_diffs: 0.0002572112295855856,
        },
        run_lat: {
          mean: 0.00033410810810810803,
          squared_diffs: 0.000004612764702702703,
        },
        service_lat: {
          mean: 0.0033000810810810796,
          squared_diffs: 0.0005165226542702703,
        },
        overhead_lat: {
          mean: 0.0016423333333333335,
          squared_diffs: 0.00021376917666666667,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "filter",
            attrs: [
              {
                key: "filter",
                value: "(claim_session_id = _) AND (claim_instance_id = _)",
              },
            ],
            children: [
              {
                name: "index join",
                attrs: [{ key: "table", value: "jobs@primary" }],
                children: [
                  {
                    name: "scan",
                    attrs: [
                      { key: "missing stats", value: "" },
                      { key: "table", value: "jobs@jobs_status_created_idx" },
                      { key: "spans", value: "2 spans" },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943734",
            nanos: 680474000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            'UPSERT INTO system.reports_meta(id, "generated") VALUES ($1, $2)',
          app: "$ internal-timestamp-upsert-replication-stats",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "55",
        first_attempt_count: "55",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 1, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: {
          mean: 0.0008906727272727272,
          squared_diffs: 0.000014020776109090905,
        },
        run_lat: {
          mean: 0.00037090909090909096,
          squared_diffs: 9.749625454545452e-7,
        },
        service_lat: {
          mean: 0.0027207272727272722,
          squared_diffs: 0.00015679328690909082,
        },
        overhead_lat: {
          mean: 0.0014591454545454547,
          squared_diffs: 0.00010873472483636367,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "upsert",
            attrs: [{ key: "into", value: "reports_meta(id, generated)" }],
            children: [
              {
                name: "values",
                attrs: [{ key: "size", value: "2 columns, 1 row" }],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943469",
            nanos: 454715000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "SELECT id, config FROM system.zones",
          app: "$ internal-crdb-internal-zones-table",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "29",
        first_attempt_count: "29",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: {
          mean: 0.00004631034482758621,
          squared_diffs: 4.532206896551725e-9,
        },
        plan_lat: {
          mean: 0.004104241379310344,
          squared_diffs: 0.0019697330073103446,
        },
        run_lat: {
          mean: 0.00035655172413793113,
          squared_diffs: 0.000008677753172413795,
        },
        service_lat: {
          mean: 0.004782068965517242,
          squared_diffs: 0.0023238831518620695,
        },
        overhead_lat: {
          mean: 0.0002749655172413794,
          squared_diffs: 0.00003009394496551727,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "scan",
            attrs: [
              { key: "missing stats", value: "" },
              { key: "table", value: "zones@primary" },
              { key: "spans", value: "FULL SCAN" },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943058",
            nanos: 828356000,
          },
        },
        bytes_read: { mean: 327, squared_diffs: 0 },
        rows_read: { mean: 7, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            "WITH current_meta AS (SELECT version, num_records, num_spans, total_bytes FROM system.protected_ts_meta UNION ALL SELECT _ AS version, _ AS num_records, _ AS num_spans, _ AS total_bytes ORDER BY version DESC LIMIT _) SELECT version, num_records, num_spans, total_bytes FROM current_meta",
          app: "$ internal-protectedts-GetMetadata",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "39",
        first_attempt_count: "39",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 0, squared_diffs: 0 },
        parse_lat: {
          mean: 0.0009093076923076921,
          squared_diffs: 0.0000649487663076923,
        },
        plan_lat: {
          mean: 0.0013292051282051283,
          squared_diffs: 0.000010246596358974354,
        },
        run_lat: {
          mean: 0.0003970512820512821,
          squared_diffs: 0.0000046418878974358976,
        },
        service_lat: {
          mean: 0.0029282307692307698,
          squared_diffs: 0.0003387056649230768,
        },
        overhead_lat: {
          mean: 0.0002926666666666667,
          squared_diffs: 0.00003506056666666666,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "render",
            children: [
              {
                name: "limit",
                attrs: [{ key: "count", value: "_" }],
                children: [
                  {
                    name: "sort",
                    attrs: [{ key: "order", value: "-version" }],
                    children: [
                      {
                        name: "union all",
                        children: [
                          {
                            name: "scan",
                            attrs: [
                              { key: "missing stats", value: "" },
                              {
                                key: "table",
                                value: "protected_ts_meta@primary",
                              },
                              { key: "spans", value: "FULL SCAN" },
                            ],
                          },
                          {
                            name: "values",
                            attrs: [{ key: "size", value: "1 column, 1 row" }],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943571",
            nanos: 237638000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query:
            'DELETE FROM system.public.lease WHERE ("descID", version, "nodeID", expiration) = ($1, $2, __more2__)',
          app: "$ internal-lease-release",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: true,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "682",
        first_attempt_count: "682",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 1, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: {
          mean: 0.0006668372434017597,
          squared_diffs: 0.0015371114529340165,
        },
        run_lat: {
          mean: 0.040556887096774207,
          squared_diffs: 0.998733471322306,
        },
        service_lat: {
          mean: 0.042950363636363606,
          squared_diffs: 1.037497149257819,
        },
        overhead_lat: {
          mean: 0.0017266392961876825,
          squared_diffs: 0.005863109741266858,
        },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "delete range",
            attrs: [
              { key: "from", value: "lease" },
              { key: "auto commit", value: "" },
              { key: "spans", value: "1 span" },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598943718",
            nanos: 839348000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
    {
      key: {
        key_data: {
          query: "DELETE FROM sqlliveness WHERE session_id = $1",
          app: "$ internal-delete-expired-session",
          distSQL: false,
          failed: false,
          opt: true,
          implicit_txn: false,
          vec: false,
        },
        node_id: 1,
      },
      stats: {
        count: "1",
        first_attempt_count: "1",
        max_retries: "0",
        legacy_last_err: "",
        num_rows: { mean: 1, squared_diffs: 0 },
        parse_lat: { mean: 0, squared_diffs: 0 },
        plan_lat: { mean: 0.000849, squared_diffs: 0 },
        run_lat: { mean: 0.380026, squared_diffs: 0 },
        service_lat: { mean: 0.413773, squared_diffs: 0 },
        overhead_lat: { mean: 0.03289800000000004, squared_diffs: 0 },
        legacy_last_err_redacted: "",
        sensitive_info: {
          last_err: "",
          most_recent_plan_description: {
            name: "delete range",
            attrs: [
              { key: "from", value: "sqlliveness" },
              { key: "spans", value: "1 span" },
            ],
          },
          most_recent_plan_timestamp: {
            seconds: "1598942533",
            nanos: 531794000,
          },
        },
        bytes_read: { mean: 0, squared_diffs: 0 },
        rows_read: { mean: 0, squared_diffs: 0 },
      },
    },
  ],
  last_reset: { seconds: "1598938195", nanos: 802921000 },
  internal_app_name_prefix: "$ internal",
  transactions: [
    {
      stats_data: {
        statement_ids: ["60d2c10043884cb136674a449007bc52"],
        app: "$ internal-show-version",
        stats: {
          count: "1",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.005977, squared_diffs: 0 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000003, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["71a3d6d05888b6271ea3b905a246681c"],
        app: "$ internal-read-setting",
        stats: {
          count: "20",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.00170075, squared_diffs: 0.00000538271775 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.00000565, squared_diffs: 1.5655e-10 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["1a9ac8a7bccdae29de627d49342627a0"],
        app: "$ internal-select-running/reverting-jobs",
        stats: {
          count: "709",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.003289600846262341,
            squared_diffs: 0.0039016326860394947,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000009665726375176304,
            squared_diffs: 0.000003995935777150914,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["48aba7688095051c9bc012682c580546"],
        app: "$ internal-lease-release",
        stats: {
          count: "4374",
          max_retries: "0",
          num_rows: { mean: 1, squared_diffs: 0 },
          service_lat: {
            mean: 0.0368324929126659,
            squared_diffs: 9.709422987761277,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["64509715caa3bf9887be6f427f118d3e"],
        app: "$ internal-count-leases",
        stats: {
          count: "16",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0113574375,
            squared_diffs: 0.010705644689937498,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000008312500000000002,
            squared_diffs: 1.5543750000000006e-10,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["b44b231a3eff802cf80c437ca1546367"],
        app: "$ internal-adopt-job",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.0205, squared_diffs: 0.00003045120799999999 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000008, squared_diffs: 1.8e-11 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["8c5672fb35f0f690bab77a63ea610380"],
        app: "$ internal-read-zone-configs",
        stats: {
          count: "20",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0017310000000000001,
            squared_diffs: 0.000022206140000000004,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000006050000000000001,
            squared_diffs: 6.829500000000001e-10,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["c3e39d9bc4b85cd1af18c2fc49e1bf7b"],
        app: "$ internal-delete-sessions",
        stats: {
          count: "1061",
          max_retries: "1",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.01244745146088596,
            squared_diffs: 25.052657747666746,
          },
          retry_lat: {
            mean: 0.0005075749293119699,
            squared_diffs: 0.2897487524892932,
          },
          commit_lat: {
            mean: 0.0004363562676720073,
            squared_diffs: 0.06710210306933084,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["cb2551b9887a28e24404198ebe876e83"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.044320000000000005,
            squared_diffs: 0.0017122952000000002,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000008000000000000001, squared_diffs: 8e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["943c6f96b7c7d0046ba489f48c0cb55e"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.015980499999999998,
            squared_diffs: 0.000050270364500000005,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000065000000000000004,
            squared_diffs: 5.000000000000002e-13,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["2eb6afbefdb1c7da6993262480833850"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.074364, squared_diffs: 0.0013398593780000001 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000014, squared_diffs: 1.28e-10 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["283cfbff5049979a5d9b550a5ddaa92d"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.0227505, squared_diffs: 0.0003604881005 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000075, squared_diffs: 4.500000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["1324da52c1bc3268180d4c449938bb35"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.031823,
            squared_diffs: 0.00004033816200000002,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000009, squared_diffs: 8.000000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["a8028d791768f3917a494b2d5a33b1a7"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.016091499999999998,
            squared_diffs: 0.000009772620500000001,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000049999999999999996, squared_diffs: 2e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["d469b9ad35098627c7bc28a0eca86f0a"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0034114999999999996,
            squared_diffs: 5.100499999999974e-9,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000006, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["4d9af02acd2a0c1c527ada6da683287b"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.0609435, squared_diffs: 0.0021433568645 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000007000000000000001,
            squared_diffs: 7.999999999999998e-12,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["5f40f1c4d91b8d94b94fb26f740ecc8c"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0033420000000000004,
            squared_diffs: 6.891379999999999e-7,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000049999999999999996, squared_diffs: 2e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["a50abb74bd16244fe0bf4484b99e6566"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.029073, squared_diffs: 0.0006591354319999998 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000065000000000000004,
            squared_diffs: 4.499999999999999e-12,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["77c6e7516edbe3cde7925068f16b1797"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.050408999999999995,
            squared_diffs: 0.00031285009800000014,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000007499999999999999,
            squared_diffs: 4.999999999999993e-13,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["18a3479fbced113e171476ad92f7ffb3"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.10572000000000001,
            squared_diffs: 0.00024624243199999993,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000055, squared_diffs: 4.999999999999993e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["b5d3997bd47ccc8ffaa45b6e1c2aecb2"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.016733500000000002,
            squared_diffs: 0.0001037232045,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000007000000000000001,
            squared_diffs: 8.000000000000001e-12,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["e8f132df2d145eceeecdfa327fcc3ee4"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.0254, squared_diffs: 2.7848000000000022e-8 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000006, squared_diffs: 1.999999999999999e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["34c8f27c9d03f1ffc88f9f2411e5f770"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.051036,
            squared_diffs: 0.00003704883200000001,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000008, squared_diffs: 2e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["00ec5d509fe40d0129b8c36041607ac0"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.012757500000000001,
            squared_diffs: 0.000012746200500000003,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000007499999999999999,
            squared_diffs: 5.000000000000002e-13,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["f3d95f7a729d4614a55b77d065d53be9"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.048972, squared_diffs: 0.0009448204500000002 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000006, squared_diffs: 1.999999999999999e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["11ce1f85f02c1ab31cb09c964301a508"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.0175485, squared_diffs: 0.0001010899805 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000055, squared_diffs: 4.999999999999993e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["c26b328d1b041ecb5db451bd6b3c728c"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.027629,
            squared_diffs: 0.00036115968799999996,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000007, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["3e379faed1f2f31667e5d946fef01e57"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.029303500000000003,
            squared_diffs: 0.000010676820500000009,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000006, squared_diffs: 1.999999999999999e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["6b5dd36bc326fddd4644953ecebdf7bb"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.050021499999999997,
            squared_diffs: 0.000035003344500000084,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000007, squared_diffs: 1.999999999999999e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["4a6274a45a3f5994dee1950492006478"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.018483, squared_diffs: 0.0000321602 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000049999999999999996,
            squared_diffs: 7.999999999999998e-12,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["95fd74fbb391f882b54eb8ffabe11695"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0308365,
            squared_diffs: 0.000022224444499999995,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000049999999999999996,
            squared_diffs: 7.999999999999998e-12,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["bcb3b88c49c70d29e9b005d1d2d4e179"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.049541, squared_diffs: 0.0005469447379999998 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000009, squared_diffs: 7.999999999999998e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["fae37aad8c912a72d6a9fc216afd78dd"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0409215,
            squared_diffs: 0.00031407698450000007,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000007, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["0727a2ebff6a41364b77de487810ca13"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.015380499999999998,
            squared_diffs: 0.0000013300804999999966,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000075, squared_diffs: 4.500000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["ae7bb87c63c9d7c128adc549b03720ea"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.0260115, squared_diffs: 0.0001532475245 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000075, squared_diffs: 4.500000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["904610b616d85e037bbed6f25293cc31"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.020131,
            squared_diffs: 0.00009663280199999997,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000055, squared_diffs: 4.500000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["81bbc4e20223515a1d041ff8c951f46b"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.0634855, squared_diffs: 0.005112121612500001 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000085,
            squared_diffs: 1.2499999999999997e-11,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["9d9e41bf126a4683ddda0952172a3024"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.048608, squared_diffs: 9.417799999999714e-8 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000005, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["459821a9998974b17b450edba80baf3a"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0552335,
            squared_diffs: 0.0019937718044999997,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000049999999999999996,
            squared_diffs: 7.999999999999998e-12,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["fa3387b5e78d0892075fecde8f9819ea"],
        app: "$ internal-admin-show-grants",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.006092,
            squared_diffs: 0.000011965832000000002,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000055, squared_diffs: 5.000000000000002e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["70c0d214d5d020dddfa1bfc19084e5a8"],
        app: "$ internal-read-downgrade",
        stats: {
          count: "1",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.001077, squared_diffs: 0 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000002, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["dc83b6029efc0f7b6377c4a2252c19e6"],
        app: "$ internal-admin-query-zone",
        stats: {
          count: "122",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.015299549180327858,
            squared_diffs: 0.060837775274204926,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000006344262295081968,
            squared_diffs: 2.649540983606558e-9,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["36541f1aedf5aa0a50bb8dd8b55f6b5b"],
        app: "$ internal-add CREATELOGIN where a role already has CREATEROLE",
        stats: {
          count: "1",
          max_retries: "0",
          num_rows: { mean: 2, squared_diffs: 0 },
          service_lat: { mean: 0.156485, squared_diffs: 0 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: [
          "ba29a6d105491afdc2671ca4bd28ee5a",
          "ba29a6d105491afdc2671ca4bd28ee5Q",
        ],
        app: "$ internal-gc-jobs",
        stats: {
          count: "5",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.007473799999999999,
            squared_diffs: 0.00019355761280000002,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000074,
            squared_diffs: 5.7200000000000007e-11,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["6cd4b0cceb763c41c32214468aa6af1b"],
        app: "$ internal-set-schedule-owner",
        stats: {
          count: "1",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.108953, squared_diffs: 0 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["91c33991e308780f59ea874370656bd2"],
        app: "$ internal-alter-scheduled-jobs",
        stats: {
          count: "1",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.901221, squared_diffs: 0 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.067323, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["de9ad37c7437288a818ab2a4b8ff2750"],
        app: "$ internal-set-version",
        stats: {
          count: "1",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.153062, squared_diffs: 0 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000011, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["e5d4ed525af22adc3ef8d5c499c1fed2"],
        app: "$ internal-get-tables",
        stats: {
          count: "1",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.017486, squared_diffs: 0 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000011, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["4841a7b424cba9107e22f77a3df9f5c2"],
        app: "$ internal-admin-show-dbs",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.037232999999999995,
            squared_diffs: 0.0024528008,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000008000000000000001, squared_diffs: 8e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["ac84cd344a8dc17aaa823b7fff0bc4c2"],
        app: "$ internal-admin-query-namespace-ID",
        stats: {
          count: "238",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.00861164705882353,
            squared_diffs: 0.07821506818435298,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000018378151260504206,
            squared_diffs: 0.000006250953966386554,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["d64ceb6a107058572f09b777b971752f"],
        app: "$ internal-poll-show-jobs",
        stats: {
          count: "13",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.016987923076923078,
            squared_diffs: 0.003604307924923077,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.00000776923076923077,
            squared_diffs: 4.2307692307692304e-11,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["5f671646e87bcec042bf7a0e32eaff88"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.094523, squared_diffs: 0.00993909005 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000095, squared_diffs: 5.000000000000006e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["db2082fe245fe064fa49a4d9f542c2ab"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.095829,
            squared_diffs: 0.000052510752000000075,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000008000000000000001,
            squared_diffs: 8.000000000000006e-12,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["5ea6aad9d42f22c41b0959da8eda4306"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0845985,
            squared_diffs: 0.0010109256124999997,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000195, squared_diffs: 1.445e-10 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["9013c54ac826613c21c431f5cee7b6e2"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.06546850000000001,
            squared_diffs: 0.0027053161245,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000007499999999999999,
            squared_diffs: 5.000000000000002e-13,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["7a789e9c01fc870f8fa47796f5310235"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.12700250000000002,
            squared_diffs: 0.010474110112499997,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000007000000000000001,
            squared_diffs: 1.8000000000000002e-11,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["ecb8a7e812ea11920bc6c58d99cdebdf"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.052015500000000006,
            squared_diffs: 0.0003481896605000002,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000049999999999999996, squared_diffs: 2e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["873230d051eb0e3c781d50ef8e5f02a6"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.06596199999999999,
            squared_diffs: 0.0008395162879999996,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000085, squared_diffs: 5.000000000000006e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["84a0ab7b88f0fb1a0b11a657ee8e0403"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.099668, squared_diffs: 0.0006886502719999994 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000007, squared_diffs: 3.2e-11 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["7e45a253efb6ce1cd110891dbd56b296"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.061118500000000006,
            squared_diffs: 0.0012051595125000005,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000075, squared_diffs: 4.500000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["ecaa83758e0140dc332cfdcada8cf005"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.105503, squared_diffs: 0.015965772817999997 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000007, squared_diffs: 1.999999999999999e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["37e39db9e843da3ddf2cbadc0e565a1b"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.096606, squared_diffs: 0.007547044082 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000006, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["ef1fbfd51f7fc7bd9344e80f37d683bc"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0458205,
            squared_diffs: 0.0005647152244999999,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000007000000000000001,
            squared_diffs: 1.800000000000001e-11,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["077bdf74b133a975e7b39edf2b9729de"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.10347649999999999,
            squared_diffs: 0.010818469512499998,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000007000000000000001,
            squared_diffs: 7.999999999999998e-12,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["8c13f78b609cc402c1ef6f21c17b7c57"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.0790805, squared_diffs: 0.007067059384500002 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000065000000000000004,
            squared_diffs: 1.2500000000000004e-11,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["eb89bec8d393ef8c374acf706442ebac"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.08342, squared_diffs: 0.000358637762 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000075, squared_diffs: 4.500000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["793aebcca544dfe1f875dd9c2c2e2633"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.097527,
            squared_diffs: 0.00040892280200000014,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000008, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["34b2d2b94156f20cd4691ab78e9c430a"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.176148, squared_diffs: 0.006213672242 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000065000000000000004,
            squared_diffs: 1.2500000000000004e-11,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["c78382e863bba936c4253afc05a1e040"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.03521, squared_diffs: 0.00001347843200000001 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000009, squared_diffs: 2.0000000000000024e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["67ce884cd9efb1a743b2f7d07dbe25e9"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.077776, squared_diffs: 0.006998154818 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000075, squared_diffs: 4.500000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["1960fc732d951af9d16c39b6eb07133f"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.10158049999999999,
            squared_diffs: 0.0022275810044999995,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000095, squared_diffs: 5.000000000000006e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["19ce96f048b631902b45bcc2b99535e9"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.141622, squared_diffs: 0.026464722048 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000009, squared_diffs: 8.000000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["839696da721f3d57087415091ac90e4a"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.07158400000000001,
            squared_diffs: 0.003051835937999999,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000095, squared_diffs: 5.000000000000006e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["ae0e53be4ee513fe7aaa8ace67536db4"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.06301000000000001,
            squared_diffs: 0.0033815443219999994,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000012, squared_diffs: 9.800000000000002e-11 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["1abad4e600969b4c9d20e2495e18b502"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.049186499999999994,
            squared_diffs: 0.0010207517444999995,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000008, squared_diffs: 1.8e-11 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["2c82d21d9fe7351d8f557f08f37e74bb"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.100107, squared_diffs: 0.013388697522 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000055, squared_diffs: 4.500000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["538159e494977e57ea26ac4aa7fc1944"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0368485,
            squared_diffs: 0.00017155076449999995,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000006, squared_diffs: 8.000000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["3b9390911dff2a8077712684591a57b3"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.0826515, squared_diffs: 0.0012297328245 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000009, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["69712978daa9b1e325e0e54cd32ede8a"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.036893999999999996,
            squared_diffs: 0.00013811220000000012,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000009, squared_diffs: 2.0000000000000024e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["ce86831a9b616446043606f75e9fa9f2"],
        app: "$ internal-admin-show-columns",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.0378975, squared_diffs: 0.0001511538845 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000008, squared_diffs: 4.999999999999999e-11 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["78f0b0a068bd21b9338f3ff9ac608c04"],
        app: "$ internal-stmt-diag-poll",
        stats: {
          count: "2126",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.004865830667920975,
            squared_diffs: 12.53030203296905,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000006065380997177805,
            squared_diffs: 7.314791204139232e-8,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["406becfb66886cd8448f5b5ea3875f46"],
        app: "$ internal-read orphaned leases",
        stats: {
          count: "1",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.002753, squared_diffs: 0 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000007, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["f6db0953fcd74bcbbd7d7370db2d82a6"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.07376450000000001,
            squared_diffs: 0.00019878186050000012,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000007499999999999999,
            squared_diffs: 2.4500000000000003e-11,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["9b65a6574c7ea173445b4558ae9476fb"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0187335,
            squared_diffs: 0.00003490301250000001,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000049999999999999996, squared_diffs: 2e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["a709f71797c36b6b86c60f5fb38491c8"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.036263000000000004,
            squared_diffs: 0.0009215783120000003,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000006, squared_diffs: 1.999999999999999e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["b1c42efd54cc53a2c544ae2d1451db25"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0489215,
            squared_diffs: 0.0009116023005000001,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000007500000000000001,
            squared_diffs: 1.2500000000000004e-11,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["a7996f3d983e81844ca72a1a83587cf3"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.1566635, squared_diffs: 0.004769421444500002 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000045, squared_diffs: 5.000000000000006e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["05423dc52526f8a9282e51094a223f6b"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.1038995, squared_diffs: 0.013258269960500002 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000006, squared_diffs: 1.999999999999999e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["99d5e5be06487d3e7288ae1ef9c25c84"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.091272, squared_diffs: 0.009607197728 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000004, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["4a2d634f47b2e450017d1191fd4321e8"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.040412500000000004,
            squared_diffs: 0.0000027730125000000152,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000055, squared_diffs: 4.999999999999993e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["f0283adfa4dd89eb19f5285971ffd7ad"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.025809, squared_diffs: 0.00003096845 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000045, squared_diffs: 5.000000000000006e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["25db697e24a924f807fd3b6931858a13"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.088384, squared_diffs: 0.0036182823120000005 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000007499999999999999,
            squared_diffs: 4.999999999999993e-13,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["b895edb0cfa3777126c4386807b7047a"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.0746075, squared_diffs: 0.004442002512499999 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000007, squared_diffs: 1.999999999999999e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["d9df41c538a974becbad3f64c10ef4d5"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.06539,
            squared_diffs: 0.000013385138000000026,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000045, squared_diffs: 5.000000000000006e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["7ffda93d66f7671c8f54ad9f98f1100c"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.1174515,
            squared_diffs: 0.0023083974045000006,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000065000000000000004,
            squared_diffs: 4.4999999999999966e-12,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["942396095ea1e193a1c37cd27c77ee6f"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.1344955, squared_diffs: 0.011931880720499999 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000065000000000000004,
            squared_diffs: 4.999999999999993e-13,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["dfd9e467880bb9da963a198b912834bc"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.074123, squared_diffs: 0.001206190728 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000007, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["2ab2ac1ae24ad360b0d6f8ea3522ace2"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.1102955,
            squared_diffs: 0.0008145858845000004,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000005, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["41beb0d7d6b571e36649d8b658c7fac1"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.173432, squared_diffs: 0.003007466568000001 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000007, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["a48d61d5e624db1ff31c18ac46c1c281"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.1236995, squared_diffs: 0.006988575312499999 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000005, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["9cb673d9d0f92bcd2bec9e436934a500"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0739705,
            squared_diffs: 0.0005339585204999997,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000055, squared_diffs: 5.000000000000002e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["b1284789bab52c58dc15fc0cd5280d78"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.064698, squared_diffs: 0.005267690082000001 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000005, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["62cf087d38c041d558355402e41fd82b"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.08137, squared_diffs: 0.008671918208 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000055, squared_diffs: 4.500000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["5043d5c81b056fed18ec4d919e18870e"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.048616, squared_diffs: 0.0026409004879999996 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000007, squared_diffs: 1.999999999999999e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["1ed6d67de01bfc0cc85fa132d4e20540"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0917695,
            squared_diffs: 0.0020420523244999997,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000055, squared_diffs: 4.999999999999993e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["9a33cbca39c25d3a80b5361c9cdd51cd"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.033848, squared_diffs: 0.000222984962 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000055, squared_diffs: 5.000000000000002e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["9e406061d01aa5a401dfb6a48823a3bf"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.145308, squared_diffs: 0.0020775458 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000006, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["03987b80cd7f9b18c840cf11261a566f"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.01789,
            squared_diffs: 0.000020275711999999992,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000055, squared_diffs: 4.999999999999993e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["ae71744b2dc2c9bcc47f7d0cf40bbd19"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.11510250000000001,
            squared_diffs: 0.011064620040500002,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000006, squared_diffs: 1.999999999999999e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["b1ff2af3f2640e4087559ba6fdb5e843"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.077319, squared_diffs: 0.002441048191999999 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000008000000000000001,
            squared_diffs: 8.000000000000006e-12,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["eb203fc2f61ddee8663debc5cb1a70b2"],
        app: "$ internal-admin-show-create",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0572475,
            squared_diffs: 0.00011287531249999995,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000045, squared_diffs: 5.000000000000006e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["73707b5f636ec3db9f97a9a9d86d00a3"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.035338,
            squared_diffs: 0.00015742476800000002,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000075, squared_diffs: 4.500000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["e8a5e2f91b5150b84725e3d8cd72250a"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0197495,
            squared_diffs: 0.00013335078049999996,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000007500000000000001,
            squared_diffs: 1.25e-11,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["1ea0167d403f99e73c6ca1ce0f1c1382"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0763105,
            squared_diffs: 0.00008631666049999989,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000095, squared_diffs: 5.000000000000006e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["664c78784ff6c2ceb910144f348eed91"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.017195500000000002,
            squared_diffs: 0.00015925770449999997,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000065000000000000004,
            squared_diffs: 4.4999999999999966e-12,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["5326324cb3469cc95508d1b1d5b099fe"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0069505,
            squared_diffs: 0.0000016398605000000002,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000055, squared_diffs: 4.500000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["c2552aadfda14721a028267376334743"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0398715,
            squared_diffs: 0.00046265778049999997,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000006, squared_diffs: 1.999999999999999e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["c21e2e6019a38ed73f3612f55911e0fc"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.034158499999999994,
            squared_diffs: 0.0013455078124999997,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000155,
            squared_diffs: 2.2049999999999994e-10,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["2903cdae3fcd18d2d0e7a60772f7ca9b"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.014573000000000001,
            squared_diffs: 0.00010579305800000001,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000065000000000000004,
            squared_diffs: 4.999999999999993e-13,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["673bf9d0055bbae332ad497072db9bbf"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0484525,
            squared_diffs: 0.0006335732045000002,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000085, squared_diffs: 5.000000000000006e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["493595cdd8c731175498ea8b4b7efc72"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.011361,
            squared_diffs: 0.000046137618000000027,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000011, squared_diffs: 9.800000000000001e-11 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["2aa7d5009a29f201ece5638b0cdb16f8"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0078305,
            squared_diffs: 1.2450049999999994e-7,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000007, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["a030a08a5577c815624203a61ce26cab"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0355295,
            squared_diffs: 0.0016304905125000002,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000075, squared_diffs: 4.500000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["fa9ed60b441d8d1558a0805ebf2f6330"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0077234999999999995,
            squared_diffs: 0.000007601100499999999,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000065000000000000004,
            squared_diffs: 4.4999999999999966e-12,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["98ecbd5a0980b209337b39f4d3bc28df"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.022368,
            squared_diffs: 0.000012530017999999991,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000075, squared_diffs: 4.500000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["a65f2dccbbb4aecf75e6e3cc56224274"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0168055,
            squared_diffs: 0.00010624446450000001,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000055, squared_diffs: 4.500000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["a2a025a712e53fac38ce460b1d520b7d"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.012926,
            squared_diffs: 0.00005370624799999998,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000045, squared_diffs: 5.000000000000006e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["77d22337dc2c206bddee998fcc0fd83b"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0445135,
            squared_diffs: 0.0025531943404999997,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000006, squared_diffs: 8.000000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["819b1bd93f3f8e2e192a7cbe55b4b671"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.12052399999999999,
            squared_diffs: 0.0057309217999999985,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000065000000000000004,
            squared_diffs: 4.4999999999999966e-12,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["4b6b2d9ff72c5e4caf5fcaeef685642c"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0237145,
            squared_diffs: 0.00040535586449999994,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000007499999999999999,
            squared_diffs: 5.000000000000002e-13,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["bace3ca6f2b321a88de421f7a7640e1d"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.025023, squared_diffs: 0.0007279401680000001 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000006, squared_diffs: 1.999999999999999e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["4854fc53fbae4b5ec51acf5f51c8c329"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0202595,
            squared_diffs: 0.00011699910449999997,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000095, squared_diffs: 5.000000000000006e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["4e89e8880387df816ad8175f5df08cf0"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.1037395,
            squared_diffs: 0.0027327485204999996,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000007000000000000001,
            squared_diffs: 7.999999999999998e-12,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["7ad807f76de894d7e52bf19a37664116"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.028019499999999996,
            squared_diffs: 0.00023494616449999992,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000065000000000000004,
            squared_diffs: 4.4999999999999966e-12,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["bb3d00b79901c4141c2221e6b9f6370f"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0213165,
            squared_diffs: 0.000006283512499999998,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000006, squared_diffs: 7.999999999999998e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["235313e549c27b41d7dfd604d8d76573"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0085915,
            squared_diffs: 0.000007980012499999996,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000055, squared_diffs: 5.000000000000002e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["a745f2e70cc85c71ef1e9c5b6e5a7ed8"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0382005,
            squared_diffs: 0.0004957785605000001,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000365, squared_diffs: 1.2005e-9 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["bd98c15c6b02ea9e9ec6d01d54ea8688"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.012362,
            squared_diffs: 0.000006617521999999996,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000055, squared_diffs: 4.500000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["0dbe3dc23ed7424f3d2c042c0e8620e5"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.007749000000000001,
            squared_diffs: 1.6131199999999972e-7,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000006, squared_diffs: 8.000000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["19067d21a130b78a93bc8001f6e740f5"],
        app: "$ internal-admin-showindex",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.0750305, squared_diffs: 0.0017580671045 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000085,
            squared_diffs: 4.5000000000000014e-12,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["2f3812037497d01bc867325c68d77383"],
        app: "$ internal-stmt-diag-get-all",
        stats: {
          count: "60",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0026996833333333345,
            squared_diffs: 0.00005577790498333332,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000063333333333333326,
            squared_diffs: 2.633333333333335e-10,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["21ab2d5af47af581f0e3d9100e3f84b7"],
        app: "$ internal-add-jobs-claim-cols",
        stats: {
          count: "1",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: { mean: 0.881596, squared_diffs: 0 },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.132994, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["4714e268c65537bdb311b9365ada0c2e"],
        app: "$ internal-admin-getUIData",
        stats: {
          count: "10",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.003931800000000001,
            squared_diffs: 0.000004347829599999999,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000066, squared_diffs: 1.04e-11 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["7ebebbc9d27fdb46adfcd0552249c14a"],
        app: "$ internal-admin-getUIData",
        stats: {
          count: "21",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0037508095238095243,
            squared_diffs: 0.000024468839238095244,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.000006285714285714286,
            squared_diffs: 1.282857142857143e-10,
          },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["ee46261b4c0fdd3049b886c1fe34aaaf"],
        app: "$ internal-expire-sessions",
        stats: {
          count: "709",
          max_retries: "0",
          num_rows: {
            mean: 0.012693935119887164,
            squared_diffs: 16.885754583921017,
          },
          service_lat: {
            mean: 0.011326574047954865,
            squared_diffs: 15.88232562679937,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0, squared_diffs: 0 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["50a9806ced1a97f8947e2a2e90203b2f"],
        app: "$ internal-admin-events",
        stats: {
          count: "3",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.004962,
            squared_diffs: 0.000004827296000000001,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.000008000000000000001, squared_diffs: 8e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["15582e214fe8fb40aeedf8c7bd297500"],
        app: "$ internal-admin-show-tables",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.034027,
            squared_diffs: 0.00011485216800000004,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000045, squared_diffs: 4.500000000000001e-12 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["a252e57adedfa85ff8cadddeb70004dc"],
        app: "$ internal-admin-show-tables",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.034747,
            squared_diffs: 0.00041472000000000015,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: { mean: 0.0000055, squared_diffs: 4.999999999999993e-13 },
        },
      },
      node_id: 1,
    },
    {
      stats_data: {
        statement_ids: ["e561a67eaccf34130dbcf13d1d75e1e2"],
        app: "$ internal-admin-show-tables",
        stats: {
          count: "2",
          max_retries: "0",
          num_rows: { mean: 0, squared_diffs: 0 },
          service_lat: {
            mean: 0.0432495,
            squared_diffs: 0.000005226144499999999,
          },
          retry_lat: { mean: 0, squared_diffs: 0 },
          commit_lat: {
            mean: 0.0000085,
            squared_diffs: 4.5000000000000014e-12,
          },
        },
      },
      node_id: 1,
    },
  ],
};
