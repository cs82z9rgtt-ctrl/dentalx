import { useState } from "react";

const accent = "#2563eb";
const gold = "#b45309";
const green = "#15803d";
const red = "#b91c1c";
const purple = "#7c3aed";

const SectionHeader = ({ children, color = accent }) => (
  <div
    style={{
      background: color,
      color: "#fff",
      fontFamily: "'Georgia', serif",
      fontWeight: 700,
      fontSize: "1.1rem",
      padding: "10px 18px",
      borderRadius: "7px 7px 0 0",
      letterSpacing: "0.5px",
      marginTop: "28px",
      marginBottom: "0",
    }}
  >
    {children}
  </div>
);

const Card = ({ children, style = {} }) => (
  <div
    style={{
      background: "#fff",
      border: "1px solid #e2e8f0",
      borderRadius: "0 0 7px 7px",
      padding: "16px 18px",
      marginBottom: "0",
      ...style,
    }}
  >
    {children}
  </div>
);

const Box = ({
  children,
  color = "#eff6ff",
  border = "#bfdbfe",
  style = {},
}) => (
  <div
    style={{
      background: color,
      border: `1.5px solid ${border}`,
      borderRadius: 7,
      padding: "12px 16px",
      margin: "10px 0",
      ...style,
    }}
  >
    {children}
  </div>
);

const Tag = ({ children, color = accent }) => (
  <span
    style={{
      background: color,
      color: "#fff",
      borderRadius: 4,
      padding: "2px 9px",
      fontSize: "0.78rem",
      fontWeight: 700,
      marginRight: 6,
      display: "inline-block",
    }}
  >
    {children}
  </span>
);

const Table = ({ headers, rows }) => (
  <div style={{ overflowX: "auto", margin: "10px 0" }}>
    <table
      style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.93rem" }}
    >
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th
              key={i}
              style={{
                background: accent,
                color: "#fff",
                padding: "8px 12px",
                textAlign: "left",
                fontWeight: 700,
                borderRight: "1px solid #1d4ed8",
              }}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ background: i % 2 === 0 ? "#f0f7ff" : "#fff" }}>
            {row.map((cell, j) => (
              <td
                key={j}
                style={{
                  padding: "7px 12px",
                  borderBottom: "1px solid #e2e8f0",
                  borderRight: "1px solid #e2e8f0",
                  verticalAlign: "top",
                }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Bullet = ({ children, color = "#2563eb" }) => (
  <div
    style={{
      display: "flex",
      gap: 9,
      marginBottom: 5,
      alignItems: "flex-start",
    }}
  >
    <span style={{ color, fontWeight: 900, marginTop: 1, flexShrink: 0 }}>
      ▸
    </span>
    <span style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>{children}</span>
  </div>
);

const Mnemonic = ({ title, content }) => (
  <Box color="#fefce8" border="#fde68a">
    <div style={{ fontWeight: 700, color: gold, marginBottom: 4 }}>
      🧠 MNEMONIC: {title}
    </div>
    <div style={{ fontSize: "0.95rem" }}>{content}</div>
  </Box>
);

const VivaBadge = () => (
  <span
    style={{
      background: "#7c3aed",
      color: "#fff",
      borderRadius: 4,
      padding: "1px 7px",
      fontSize: "0.72rem",
      fontWeight: 700,
      marginLeft: 6,
      verticalAlign: "middle",
    }}
  >
    VIVA★
  </span>
);

const ExamBadge = () => (
  <span
    style={{
      background: "#b91c1c",
      color: "#fff",
      borderRadius: 4,
      padding: "1px 7px",
      fontSize: "0.72rem",
      fontWeight: 700,
      marginLeft: 6,
      verticalAlign: "middle",
    }}
  >
    EXAM★
  </span>
);

const tabs = [
  "📘 Chapter Overview",
  "🗂️ Classification",
  "⚗️ Properties",
  "🦷 Clinical",
  "📝 Exam Prep",
  "🔁 Rapid Revision",
];

export default function App() {
  const [active, setActive] = useState(0);

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Georgia, sans-serif",
        maxWidth: 880,
        margin: "0 auto",
        background: "#f8fafc",
        minHeight: "100vh",
        padding: "0 0 40px 0",
      }}
    >
      {/* Header */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #1e3a8a 0%, #2563eb 60%, #0ea5e9 100%)",
          color: "#fff",
          padding: "28px 28px 18px 28px",
          borderRadius: "0 0 16px 16px",
          marginBottom: 0,
        }}
      >
        <div
          style={{
            fontSize: "0.8rem",
            opacity: 0.8,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          Philips · Dental Materials · BDS 2nd Year
        </div>
        <div
          style={{
            fontSize: "1.65rem",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 6,
          }}
        >
          Chapter 1: Overview of Preventive
          <br />& Restorative Materials
        </div>
        <div style={{ fontSize: "0.88rem", opacity: 0.85 }}>
          High-Yield · Exam-Oriented · Viva-Ready · University Pattern
        </div>
        <div
          style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}
        >
          {[
            "Long Answer",
            "Short Notes",
            "MCQs",
            "Viva Prep",
            "Last-Minute Revision",
          ].map((t) => (
            <span
              key={t}
              style={{
                background: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.35)",
                borderRadius: 20,
                padding: "3px 12px",
                fontSize: "0.78rem",
                fontWeight: 600,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          background: "#1e3a8a",
          padding: "0 12px",
          gap: 2,
          borderBottom: "3px solid #2563eb",
        }}
      >
        {tabs.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              background: active === i ? "#2563eb" : "transparent",
              color: active === i ? "#fff" : "#93c5fd",
              border: "none",
              cursor: "pointer",
              padding: "12px 16px",
              fontWeight: active === i ? 700 : 500,
              fontSize: "0.85rem",
              whiteSpace: "nowrap",
              borderRadius: "4px 4px 0 0",
              transition: "all 0.15s",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <div style={{ padding: "18px 16px 0 16px" }}>
        {/* ── TAB 0: CHAPTER OVERVIEW ── */}
        {active === 0 && (
          <div>
            <SectionHeader>
              📖 Chapter Overview & Learning Objectives
            </SectionHeader>
            <Card>
              <Box color="#eff6ff" border="#bfdbfe">
                <b>What is this chapter about?</b>
                <p style={{ margin: "6px 0 0 0", fontSize: "0.95rem" }}>
                  This chapter introduces the{" "}
                  <b>foundation of dental materials science</b> — understanding
                  why materials are used, how they are classified, what
                  properties determine their clinical success, and how to select
                  them appropriately for preventive and restorative dentistry.
                </p>
              </Box>
              <b style={{ color: accent }}>🎯 Learning Objectives</b>
              <div style={{ marginTop: 8 }}>
                {[
                  "Define and classify dental materials",
                  "Understand the ADA (ANSI/ADA) specification system",
                  "Distinguish between preventive and restorative materials",
                  "Describe physical, mechanical, chemical & biological properties",
                  "Understand ideal requirements of a restorative material",
                  "Recognize factors affecting material selection",
                ].map((o, i) => (
                  <Bullet key={i} color={green}>
                    ✔ {o}
                  </Bullet>
                ))}
              </div>
            </Card>

            <SectionHeader color={green}>🦷 Clinical Importance</SectionHeader>
            <Card>
              <Bullet>
                Every restorative procedure depends on understanding material
                properties — a wrong choice → restoration failure
              </Bullet>
              <Bullet>
                Examiners expect you to justify material selection based on
                properties
              </Bullet>
              <Bullet>
                Foundation for ALL future dental materials chapters
              </Bullet>
              <Box color="#f0fdf4" border="#bbf7d0">
                <b style={{ color: green }}>Clinical Pearl 🌟</b>
                <br />
                No single material satisfies ALL ideal requirements → clinical
                selection is always a <b>compromise</b> based on the clinical
                situation
              </Box>
            </Card>

            <SectionHeader color={purple}>
              📚 Definition of Dental Materials
            </SectionHeader>
            <Card>
              <Box color="#faf5ff" border="#e9d5ff">
                <b>
                  Definition <VivaBadge />
                </b>
                <br />
                <span style={{ fontSize: "0.95rem" }}>
                  Dental materials are <b>substances used in dental practice</b>{" "}
                  for the diagnosis, prevention, treatment, and restoration of
                  oral diseases and disorders, including natural tooth structure
                  replacement and jaw bone support.
                </span>
              </Box>
              <Mnemonic
                title="DENTAL"
                content={
                  <div>
                    <b>D</b>iagnosis · <b>E</b>xamine · <b>N</b>eed assessment ·{" "}
                    <b>T</b>reatment · <b>A</b>ppropriate material · <b>L</b>
                    ong-term success
                  </div>
                }
              />
            </Card>

            <SectionHeader color={gold}>
              📋 ADA/ANSI Specification System <ExamBadge />
            </SectionHeader>
            <Card>
              <Bullet>
                <b>ADA</b> = American Dental Association
              </Bullet>
              <Bullet>
                <b>ANSI</b> = American National Standards Institute
              </Bullet>
              <Bullet>
                <b>ISO</b> = International Organization for Standardization
              </Bullet>
              <Box color="#fffbeb" border="#fde68a">
                <b>Purpose of Specification System:</b>
                <div style={{ marginTop: 6 }}>
                  {[
                    "Ensure safety and efficacy of dental materials",
                    "Establish minimum requirements for materials",
                    "Provide standardized testing methods",
                    "Protect patients and clinicians",
                    "Enable fair comparison between products",
                  ].map((p, i) => (
                    <Bullet key={i} color={gold}>
                      {p}
                    </Bullet>
                  ))}
                </div>
              </Box>
              <Mnemonic
                title="SPECS"
                content={
                  <>
                    <b>S</b>afety · <b>P</b>erformance standards · <b>E</b>
                    fficacy testing · <b>C</b>omparison enabled · <b>S</b>
                    tandardized methods
                  </>
                }
              />
            </Card>
          </div>
        )}

        {/* ── TAB 1: CLASSIFICATION ── */}
        {active === 1 && (
          <div>
            <SectionHeader>🗂️ Classification of Dental Materials</SectionHeader>
            <Card>
              <Box color="#eff6ff" border="#bfdbfe">
                <b>
                  Multiple classification systems exist — know all of them for
                  viva! <VivaBadge />
                </b>
              </Box>

              <b
                style={{
                  color: accent,
                  display: "block",
                  marginBottom: 8,
                  marginTop: 10,
                }}
              >
                1️⃣ Based on USE / Function <ExamBadge />
              </b>
              <Table
                headers={["Category", "Examples", "Purpose"]}
                rows={[
                  [
                    "Preventive Materials",
                    "Pit & fissure sealants, Fluoride varnish, Dentifrices",
                    "Prevent disease",
                  ],
                  [
                    "Restorative Materials (Direct)",
                    "Amalgam, Composite resin, GIC, RMGIC",
                    "Restore tooth form/function directly in mouth",
                  ],
                  [
                    "Restorative Materials (Indirect)",
                    "Porcelain, Cast metal, Ceramic crowns",
                    "Fabricated outside mouth, cemented",
                  ],
                  [
                    "Impression Materials",
                    "Alginate, PVS, Zinc oxide eugenol paste",
                    "Record oral structures",
                  ],
                  [
                    "Luting/Cementing Agents",
                    "Zinc phosphate, GIC, Resin cements",
                    "Bond restorations to tooth",
                  ],
                  [
                    "Auxiliary Materials",
                    "Gypsum products, Waxes, Abrasives",
                    "Aid in fabrication/finishing",
                  ],
                  [
                    "Endodontic Materials",
                    "Gutta percha, Root canal sealers",
                    "Root canal therapy",
                  ],
                  [
                    "Periodontal Materials",
                    "Periodontal dressings, Bone grafts",
                    "Periodontal treatment",
                  ],
                ]}
              />

              <b
                style={{
                  color: green,
                  display: "block",
                  marginBottom: 8,
                  marginTop: 16,
                }}
              >
                2️⃣ Based on COMPOSITION (Material Science) <ExamBadge />
              </b>
              <Table
                headers={["Type", "Examples", "Key Property"]}
                rows={[
                  [
                    "Metals & Alloys",
                    "Amalgam, Gold alloys, Cobalt-chrome",
                    "High strength, ductility",
                  ],
                  [
                    "Ceramics",
                    "Porcelain, Zirconia, Alumina",
                    "Aesthetics, brittleness",
                  ],
                  [
                    "Polymers (Plastics)",
                    "Composite resin, PMMA denture base, Sealants",
                    "Tooth-colored, variable strength",
                  ],
                  [
                    "Composites (Combined)",
                    "Composite resin (polymer + ceramic filler)",
                    "Combines best of both",
                  ],
                  [
                    "Biological Materials",
                    "Hydroxyapatite, Collagen membranes",
                    "Biocompatible, bone-like",
                  ],
                ]}
              />

              <b
                style={{
                  color: purple,
                  display: "block",
                  marginBottom: 8,
                  marginTop: 16,
                }}
              >
                3️⃣ Based on LOCATION of use
              </b>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                }}
              >
                <Box color="#faf5ff" border="#e9d5ff">
                  <b>Intraoral Materials</b>
                  <Bullet color={purple}>Used directly in the mouth</Bullet>
                  <Bullet color={purple}>Must be biocompatible</Bullet>
                  <Bullet color={purple}>Eg: Amalgam, Composite</Bullet>
                </Box>
                <Box color="#f0fdf4" border="#bbf7d0">
                  <b>Extraoral Materials</b>
                  <Bullet color={green}>Used outside mouth (lab)</Bullet>
                  <Bullet color={green}>Less strict biocompatibility</Bullet>
                  <Bullet color={green}>Eg: Gypsum, Waxes</Bullet>
                </Box>
              </div>

              <b
                style={{
                  color: red,
                  display: "block",
                  marginBottom: 8,
                  marginTop: 16,
                }}
              >
                4️⃣ Based on SETTING MECHANISM
              </b>
              <Table
                headers={["Mechanism", "Type", "Examples"]}
                rows={[
                  ["Chemical reaction", "Acid-base", "GIC, ZnPO4 cement"],
                  [
                    "Light activation",
                    "Photopolymerization",
                    "Light-cured composites, Sealants",
                  ],
                  [
                    "Heat activation",
                    "Thermoplastic",
                    "Impression compound, Waxes",
                  ],
                  [
                    "Dual cure",
                    "Chemical + Light",
                    "Dual-cure composites, Some cements",
                  ],
                  [
                    "Irreversible chemical",
                    "Condensation/Addition",
                    "PVS, Alginate",
                  ],
                ]}
              />

              <Mnemonic
                title="CLHD for Classification"
                content={
                  <>
                    <b>C</b>omposition · <b>L</b>ocation · <b>H</b>ow it sets ·{" "}
                    <b>D</b>ental use/function
                  </>
                }
              />
            </Card>

            <SectionHeader color={green}>
              🛡️ Preventive vs Restorative Materials <ExamBadge />
            </SectionHeader>
            <Card>
              <Table
                headers={[
                  "Feature",
                  "Preventive Materials",
                  "Restorative Materials",
                ]}
                rows={[
                  [
                    "Purpose",
                    "Prevent disease/caries",
                    "Replace lost tooth structure",
                  ],
                  ["Timing", "Before disease occurs", "After disease/damage"],
                  [
                    "Examples",
                    "Sealants, Fluoride varnish, Dentifrices",
                    "Amalgam, Composite, GIC, Ceramics",
                  ],
                  ["Tooth preparation", "Minimal/none", "Required"],
                  [
                    "Duration in mouth",
                    "Preventive (long-term)",
                    "Permanent restoration",
                  ],
                  [
                    "Properties needed",
                    "Adhesion, fluoride release, biocompatibility",
                    "Strength, wear resistance, aesthetics",
                  ],
                ]}
              />
            </Card>
          </div>
        )}

        {/* ── TAB 2: PROPERTIES ── */}
        {active === 2 && (
          <div>
            <SectionHeader>⚗️ Properties of Dental Materials</SectionHeader>
            <Card>
              <Box color="#eff6ff" border="#bfdbfe">
                <b>⚠️ Most important section for theory + viva + MCQs!</b>
                <br />
                Properties determine whether a material succeeds or fails
                clinically.
              </Box>
            </Card>

            <SectionHeader color="#b45309">
              🔧 A. Mechanical Properties <ExamBadge />
            </SectionHeader>
            <Card>
              <Table
                headers={[
                  "Property",
                  "Definition",
                  "Clinical Relevance",
                  "Unit",
                ]}
                rows={[
                  [
                    "Stress",
                    "Force per unit area (F/A)",
                    "Determines if material will fracture",
                    "MPa or N/mm²",
                  ],
                  [
                    "Strain",
                    "Deformation per unit length (ΔL/L)",
                    "Measures how much material deforms",
                    "Dimensionless",
                  ],
                  [
                    "Elastic Modulus (Young's Modulus)",
                    "Stress/Strain ratio = stiffness",
                    "Higher = stiffer (Zirconia > Composite)",
                    "GPa",
                  ],
                  [
                    "Proportional Limit",
                    "Max stress before permanent deformation",
                    "Clinical loading must stay below this",
                    "MPa",
                  ],
                  [
                    "Elastic Limit",
                    "Max stress remaining truly elastic",
                    "≈ Proportional limit practically",
                    "MPa",
                  ],
                  [
                    "Yield Strength",
                    "Stress at 0.2% permanent strain",
                    "Used for metals to define 'failure' point",
                    "MPa",
                  ],
                  [
                    "Ultimate Tensile Strength (UTS)",
                    "Max stress before fracture",
                    "Critical for brittle materials",
                    "MPa",
                  ],
                  [
                    "Hardness",
                    "Resistance to surface indentation",
                    "Wear resistance; Vickers, Knoop, Brinell tests",
                    "VHN/KHN",
                  ],
                  [
                    "Toughness",
                    "Energy to fracture (area under stress-strain curve)",
                    "Impact resistance; resin vs ceramic",
                    "J/m²",
                  ],
                  [
                    "Fatigue",
                    "Failure under repeated cyclic loading (below UTS)",
                    "Amalgam, metal fatigue over years",
                    "—",
                  ],
                  [
                    "Creep/Flow",
                    "Slow deformation under constant stress",
                    "Amalgam mercury creep; important!",
                    "%",
                  ],
                  [
                    "Ductility",
                    "Ability to draw into wire",
                    "Gold alloys; measured by % elongation",
                    "%",
                  ],
                  [
                    "Malleability",
                    "Ability to be beaten into sheets",
                    "Gold foil; different from ductility",
                    "%",
                  ],
                ]}
              />
              <Mnemonic
                title="SEPTEMBER for Mechanical Properties"
                content={
                  <>
                    <b>S</b>tress · <b>E</b>lastic modulus · <b>P</b>roportional
                    limit · <b>T</b>oughness · <b>E</b>longation · <b>M</b>
                    alleability · <b>B</b>rinell hardness · <b>E</b>lastic limit
                    · <b>R</b>esistance to fatigue
                  </>
                }
              />
              <Box color="#fff1f2" border="#fecdd3">
                <b style={{ color: red }}>⚠️ EXAM TRAP:</b> Ductility ≠
                Malleability
                <Bullet color={red}>Ductility = wire drawing (tensile)</Bullet>
                <Bullet color={red}>
                  Malleability = sheet beating (compressive)
                </Bullet>
                <Bullet color={red}>
                  Gold is most malleable AND most ductile metal
                </Bullet>
              </Box>
            </Card>

            <SectionHeader color="#0891b2">
              🌡️ B. Physical Properties <ExamBadge />
            </SectionHeader>
            <Card>
              <Table
                headers={["Property", "Definition", "Clinical Significance"]}
                rows={[
                  [
                    "Density",
                    "Mass per unit volume",
                    "Weight of prosthesis; amalgam heavy",
                  ],
                  [
                    "Thermal Conductivity",
                    "Heat transfer rate",
                    "Metal conducts → pulp irritation; need liner/base",
                  ],
                  [
                    "Thermal Diffusivity",
                    "Rate of temp change",
                    "Determines thermal shock on pulp",
                  ],
                  [
                    "Coefficient of Thermal Expansion (CTE)",
                    "Dimensional change per °C change",
                    "MUST match tooth structure! Mismatch → microleakage",
                  ],
                  [
                    "Color & Esthetics",
                    "Shade, translucency, fluorescence",
                    "Critical for anterior composites & ceramics",
                  ],
                  [
                    "Optical Properties",
                    "Light reflection, transmission",
                    "Metamerism: color match in different light sources",
                  ],
                  [
                    "Electrical Conductivity",
                    "Galvanism between metals",
                    "Dissimilar metals → galvanic shock (pain)",
                  ],
                  [
                    "Viscosity/Flow",
                    "Resistance to flow",
                    "Determines ease of manipulation; impression materials",
                  ],
                  [
                    "Wettability/Surface tension",
                    "Liquid spreading on surface",
                    "Adhesion of cements; impression accuracy",
                  ],
                ]}
              />
              <Box color="#fffbeb" border="#fde68a">
                <b style={{ color: gold }}>
                  🌟 KEY VIVA: CTE of Tooth vs Materials <VivaBadge />
                </b>
                <div style={{ marginTop: 6 }}>
                  <Bullet color={gold}>Enamel: 11.4 × 10⁻⁶/°C</Bullet>
                  <Bullet color={gold}>Dentin: 8 × 10⁻⁶/°C</Bullet>
                  <Bullet color={gold}>
                    Amalgam: 22-25 × 10⁻⁶/°C (HIGH — causes percolation)
                  </Bullet>
                  <Bullet color={gold}>Composite: 25-60 × 10⁻⁶/°C</Bullet>
                  <Bullet color={gold}>
                    Gold: 14.4 × 10⁻⁶/°C (closest to tooth!)
                  </Bullet>
                </div>
              </Box>
            </Card>

            <SectionHeader color={green}>
              ⚗️ C. Chemical Properties
            </SectionHeader>
            <Card>
              <Table
                headers={["Property", "Significance"]}
                rows={[
                  [
                    "Corrosion resistance",
                    "Amalgam tarnishes; noble metals resist; affects longevity",
                  ],
                  [
                    "Solubility",
                    "GIC dissolves slightly in oral fluids; affects marginal integrity",
                  ],
                  [
                    "Chemical adhesion",
                    "GIC bonds chemically to tooth; composites need bonding agent",
                  ],
                  [
                    "Setting reaction",
                    "Acid-base (GIC), free radical polymerization (composite)",
                  ],
                  [
                    "pH changes",
                    "Zinc phosphate cement very acidic initially (pH 3.5) → pulp irritation",
                  ],
                ]}
              />
            </Card>

            <SectionHeader color={purple}>
              🧬 D. Biological Properties <ExamBadge />
            </SectionHeader>
            <Card>
              <Box color="#faf5ff" border="#e9d5ff">
                <b>
                  Biocompatibility = the ability of a material to perform its
                  intended function without causing harm to the host{" "}
                  <VivaBadge />
                </b>
              </Box>
              <div style={{ marginTop: 10 }}>
                {[
                  { t: "Non-toxic", d: "No harmful systemic or local effects" },
                  {
                    t: "Non-irritant",
                    d: "No pulpal or soft tissue irritation",
                  },
                  {
                    t: "Non-allergenic",
                    d: "No hypersensitivity reactions (nickel, mercury concerns)",
                  },
                  { t: "Non-carcinogenic", d: "No cancer-causing potential" },
                  { t: "Non-mutagenic", d: "No DNA damage" },
                  {
                    t: "Biocompatible",
                    d: "Accepted by tissues without adverse reaction",
                  },
                ].map((item, i) => (
                  <Bullet key={i} color={purple}>
                    <b>{item.t}:</b> {item.d}
                  </Bullet>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* ── TAB 3: CLINICAL ── */}
        {active === 3 && (
          <div>
            <SectionHeader color={green}>
              🦷 Ideal Requirements of a Restorative Material <ExamBadge />
            </SectionHeader>
            <Card>
              <Box color="#f0fdf4" border="#bbf7d0">
                <b>"No single material fulfills ALL ideal requirements"</b> —
                this statement alone can earn marks! <ExamBadge />
              </Box>
              <Mnemonic
                title="AMIC BASH for Ideal Requirements"
                content={
                  <div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 4,
                      }}
                    >
                      <Bullet color={gold}>
                        <b>A</b>esthetics
                      </Bullet>
                      <Bullet color={gold}>
                        <b>M</b>echanical strength
                      </Bullet>
                      <Bullet color={gold}>
                        <b>I</b>nsolubility in oral fluids
                      </Bullet>
                      <Bullet color={gold}>
                        <b>C</b>orrosion resistance
                      </Bullet>
                      <Bullet color={gold}>
                        <b>B</b>iocompatibility
                      </Bullet>
                      <Bullet color={gold}>
                        <b>A</b>dhesion to tooth structure
                      </Bullet>
                      <Bullet color={gold}>
                        <b>S</b>imilar CTE to tooth
                      </Bullet>
                      <Bullet color={gold}>
                        <b>H</b>ardness similar to enamel
                      </Bullet>
                    </div>
                    <div style={{ marginTop: 8 }}>
                      <Bullet color={gold}>Easy to manipulate</Bullet>
                      <Bullet color={gold}>Radiopaque</Bullet>
                      <Bullet color={gold}>Antimicrobial / Cariostatic</Bullet>
                      <Bullet color={gold}>Economical</Bullet>
                      <Bullet color={gold}>Long shelf life</Bullet>
                    </div>
                  </div>
                }
              />

              <Table
                headers={[
                  "Requirement",
                  "Why it Matters",
                  "Which Material Comes Closest?",
                ]}
                rows={[
                  [
                    "Aesthetics",
                    "Patient satisfaction, anterior restorations",
                    "Ceramic, Composite",
                  ],
                  [
                    "Biocompatible",
                    "Pulp & soft tissue safety",
                    "GIC, Ceramic",
                  ],
                  [
                    "Adhesion to tooth",
                    "No microleakage",
                    "GIC (chemical bond), Composite (with bonding)",
                  ],
                  [
                    "Matching CTE",
                    "Prevent marginal gap formation",
                    "Gold alloy",
                  ],
                  [
                    "Insoluble in oral fluids",
                    "Longevity",
                    "Amalgam, Ceramic, Composite",
                  ],
                  [
                    "Radiopaque",
                    "Detect secondary caries radiographically",
                    "Amalgam, Barium-containing composites",
                  ],
                  [
                    "Anticariogenic",
                    "Prevent recurrent caries",
                    "GIC (fluoride release)",
                  ],
                  [
                    "Adequate strength",
                    "Withstand masticatory forces",
                    "Amalgam, Ceramic, Metal",
                  ],
                ]}
              />
            </Card>

            <SectionHeader color={accent}>
              ⚖️ Factors Affecting Material Selection <VivaBadge />
            </SectionHeader>
            <Card>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                }}
              >
                <Box color="#eff6ff" border="#bfdbfe">
                  <b style={{ color: accent }}>Patient Factors</b>
                  <Bullet>Age & caries risk</Bullet>
                  <Bullet>Aesthetic demands</Bullet>
                  <Bullet>Oral hygiene status</Bullet>
                  <Bullet>Allergy history</Bullet>
                  <Bullet>Systemic conditions</Bullet>
                  <Bullet>Socioeconomic status</Bullet>
                </Box>
                <Box color="#f0fdf4" border="#bbf7d0">
                  <b style={{ color: green }}>Tooth Factors</b>
                  <Bullet>Cavity location (anterior/posterior)</Bullet>
                  <Bullet>Size of cavity</Bullet>
                  <Bullet>Occlusal forces</Bullet>
                  <Bullet>Remaining tooth structure</Bullet>
                  <Bullet>Pulp proximity</Bullet>
                  <Bullet>Moisture control</Bullet>
                </Box>
                <Box color="#fffbeb" border="#fde68a">
                  <b style={{ color: gold }}>Material Factors</b>
                  <Bullet>Available materials</Bullet>
                  <Bullet>Operator skill</Bullet>
                  <Bullet>Setting time</Bullet>
                  <Bullet>Clinical technique sensitivity</Bullet>
                </Box>
                <Box color="#faf5ff" border="#e9d5ff">
                  <b style={{ color: purple }}>Practical Factors</b>
                  <Bullet>Cost</Bullet>
                  <Bullet>Available equipment</Bullet>
                  <Bullet>Laboratory requirements</Bullet>
                  <Bullet>Longevity expectations</Bullet>
                </Box>
              </div>
            </Card>

            <SectionHeader color={red}>
              🔁 Clinical Correlation: Why Properties Matter
            </SectionHeader>
            <Card>
              <Table
                headers={[
                  "Clinical Problem",
                  "Property Responsible",
                  "Solution",
                ]}
                rows={[
                  [
                    "Patient feels thermal pain after amalgam",
                    "High thermal conductivity of metal",
                    "Place liner/base before amalgam",
                  ],
                  [
                    "Marginal gap after years with amalgam",
                    "CTE mismatch (amalgam vs tooth)",
                    "Use GIC or composite with bonding",
                  ],
                  [
                    "Composite fractures in Class II",
                    "Inadequate wear resistance / low strength",
                    "Use posterior composite or indirect restoration",
                  ],
                  [
                    "GIC restoration dissolves",
                    "High solubility in oral fluids early on",
                    "Protect with varnish; avoid moisture early",
                  ],
                  [
                    "Patient reports galvanic shock",
                    "Two dissimilar metals in adjacent teeth",
                    "Replace one restoration",
                  ],
                  [
                    "White line around composite",
                    "Microleakage from CTE mismatch/poor bonding",
                    "Rebond or replace with better sealed restoration",
                  ],
                ]}
              />
            </Card>
          </div>
        )}

        {/* ── TAB 4: EXAM PREP ── */}
        {active === 4 && (
          <div>
            <SectionHeader color={red}>
              📝 Most Repeated University Exam Questions
            </SectionHeader>
            <Card>
              {[
                {
                  marks: "10 marks",
                  q: "Classify dental materials and describe the ideal properties of a restorative material.",
                },
                {
                  marks: "10 marks",
                  q: "Define dental materials. Describe the mechanical and physical properties required of an ideal restorative material with clinical significance.",
                },
                {
                  marks: "5 marks",
                  q: "Write a short note on: Classification of dental materials based on composition.",
                },
                {
                  marks: "5 marks",
                  q: "Write a short note on: Ideal requirements of a restorative material.",
                },
                {
                  marks: "5 marks",
                  q: "Write a short note on: Biocompatibility of dental materials.",
                },
                {
                  marks: "5 marks",
                  q: "Write a short note on: ADA Specification system for dental materials.",
                },
                {
                  marks: "2 marks",
                  q: "Define: Stress and Strain. / Ductility and Malleability. / Creep. / Hardness.",
                },
              ].map((item, i) => (
                <Box
                  key={i}
                  color={i % 2 === 0 ? "#fff1f2" : "#eff6ff"}
                  border={i % 2 === 0 ? "#fecdd3" : "#bfdbfe"}
                  style={{ marginBottom: 6 }}
                >
                  <Tag color={i % 2 === 0 ? red : accent}>{item.marks}</Tag>
                  <span style={{ fontSize: "0.95rem" }}>{item.q}</span>
                </Box>
              ))}
            </Card>

            <SectionHeader color={purple}>
              🎓 Viva Questions & Model Answers <VivaBadge />
            </SectionHeader>
            <Card>
              {[
                {
                  q: "What is the difference between ductility and malleability?",
                  a: "Ductility is the ability of a material to be drawn into a wire under tensile stress. Malleability is the ability to be beaten into thin sheets under compressive stress. Gold is the most ductile and malleable dental metal.",
                },
                {
                  q: "Why does amalgam cause thermal sensitivity in patients?",
                  a: "Amalgam has high thermal conductivity and a high coefficient of thermal expansion. Temperature changes cause rapid heat transfer to the pulp. This is managed by placing a liner or base before the amalgam.",
                },
                {
                  q: "What is biocompatibility?",
                  a: "Biocompatibility is the ability of a material to perform its intended function without eliciting any harmful local or systemic response in the host.",
                },
                {
                  q: "What is the ADA specification system?",
                  a: "It is a standardized system established by the American Dental Association (with ANSI/ISO) that sets minimum requirements for the composition, physical properties, and testing methods of dental materials to ensure their safety and efficacy.",
                },
                {
                  q: "Which property would you check to compare stiffness of two materials?",
                  a: "Elastic Modulus (Young's Modulus) — higher elastic modulus = stiffer material. Example: Zirconia has higher elastic modulus than composite resin.",
                },
                {
                  q: "Why is GIC preferred in high caries-risk patients?",
                  a: "GIC chemically bonds to tooth structure (no etching needed for mechanical adhesion) and releases fluoride, which is cariostatic and remineralizes adjacent enamel.",
                },
                {
                  q: "What is galvanism?",
                  a: "Galvanism is an electrochemical reaction that occurs when two dissimilar metals are present in the oral cavity, creating an electric current due to their difference in electrode potential, causing pain or metallic taste.",
                },
              ].map((item, i) => (
                <Box
                  key={i}
                  color="#faf5ff"
                  border="#e9d5ff"
                  style={{ marginBottom: 8 }}
                >
                  <div
                    style={{ fontWeight: 700, color: purple, marginBottom: 4 }}
                  >
                    Q: {item.q}
                  </div>
                  <div style={{ fontSize: "0.93rem", color: "#374151" }}>
                    <b style={{ color: green }}>A:</b> {item.a}
                  </div>
                </Box>
              ))}
            </Card>

            <SectionHeader color={gold}>📌 MCQs with Answers</SectionHeader>
            <Card>
              {[
                {
                  q: "The most malleable and ductile dental metal is:",
                  options: ["Silver", "Platinum", "Gold ✓", "Tin"],
                  ans: "Gold ✓",
                  exp: "Gold is both the most malleable and most ductile metal used in dentistry.",
                },
                {
                  q: "Coefficient of thermal expansion of amalgam is approximately:",
                  options: [
                    "11 × 10⁻⁶/°C",
                    "22–25 × 10⁻⁶/°C ✓",
                    "8 × 10⁻⁶/°C",
                    "14 × 10⁻⁶/°C",
                  ],
                  ans: "22–25 × 10⁻⁶/°C ✓",
                  exp: "Enamel is ~11.4 — amalgam's higher CTE leads to percolation/microleakage.",
                },
                {
                  q: "Creep in dental materials refers to:",
                  options: [
                    "Elastic deformation",
                    "Fracture under impact",
                    "Slow deformation under constant stress ✓",
                    "Hardness test",
                  ],
                  ans: "Slow deformation under constant stress ✓",
                  exp: "Creep is time-dependent deformation; important for amalgam restorations.",
                },
                {
                  q: "Biocompatibility is evaluated by:",
                  options: [
                    "Vickers test",
                    "ISO 10993 biological testing ✓",
                    "Izod impact test",
                    "Barcol test",
                  ],
                  ans: "ISO 10993 ✓",
                  exp: "ISO 10993 is the international standard for biological evaluation of medical/dental devices.",
                },
                {
                  q: "Which material chemically bonds to tooth structure?",
                  options: [
                    "Amalgam",
                    "Composite (without bonding)",
                    "Glass Ionomer Cement ✓",
                    "Zinc Phosphate Cement",
                  ],
                  ans: "Glass Ionomer Cement ✓",
                  exp: "GIC forms an ionic bond with calcium in hydroxyapatite via polyalkenoic acid.",
                },
                {
                  q: "Stress is defined as:",
                  options: [
                    "Deformation per unit length",
                    "Force per unit area ✓",
                    "Energy to fracture",
                    "Resistance to indentation",
                  ],
                  ans: "Force per unit area ✓",
                  exp: "Stress = Force/Area, expressed in MPa or N/mm².",
                },
              ].map((item, i) => (
                <Box
                  key={i}
                  color={i % 2 === 0 ? "#f0f7ff" : "#f9fafb"}
                  border="#e2e8f0"
                  style={{ marginBottom: 8 }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      marginBottom: 6,
                      fontSize: "0.95rem",
                    }}
                  >
                    Q{i + 1}. {item.q}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: 6,
                    }}
                  >
                    {item.options.map((opt, j) => (
                      <span
                        key={j}
                        style={{
                          background: opt.includes("✓") ? "#dcfce7" : "#f3f4f6",
                          color: opt.includes("✓") ? green : "#374151",
                          border: `1.5px solid ${
                            opt.includes("✓") ? "#86efac" : "#d1d5db"
                          }`,
                          borderRadius: 5,
                          padding: "3px 10px",
                          fontSize: "0.85rem",
                          fontWeight: opt.includes("✓") ? 700 : 400,
                        }}
                      >
                        {opt}
                      </span>
                    ))}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#6b7280" }}>
                    💡 {item.exp}
                  </div>
                </Box>
              ))}
            </Card>
          </div>
        )}

        {/* ── TAB 5: RAPID REVISION ── */}
        {active === 5 && (
          <div>
            <SectionHeader color={red}>
              🔥 ONE NIGHT BEFORE EXAM — RAPID REVISION
            </SectionHeader>
            <Card>
              <Box color="#fff1f2" border="#fecdd3">
                <b style={{ color: red, fontSize: "1rem" }}>
                  ⚡ TOP 20 MUST-REMEMBER POINTS
                </b>
                <ol
                  style={{
                    margin: "10px 0 0 0",
                    paddingLeft: 20,
                    lineHeight: 2,
                  }}
                >
                  {[
                    "Dental materials = substances used for diagnosis, prevention, treatment & restoration",
                    "ADA/ANSI specifications ensure safety, efficacy & standardization",
                    "Classifications: by use, composition, location, setting mechanism",
                    "No single material fulfills ALL ideal requirements (exam gold statement)",
                    "Stress = Force/Area (MPa); Strain = ΔL/L (dimensionless)",
                    "Elastic modulus = Stress/Strain = measures stiffness",
                    "Proportional limit = max stress before permanent deformation",
                    "Hardness tests: Vickers (VHN), Knoop (KHN), Brinell, Rockwell",
                    "Ductility = wire (tensile); Malleability = sheet (compressive); Gold = most of both",
                    "Creep = slow permanent deformation under constant load (key for amalgam)",
                    "CTE: Enamel 11.4, Dentin 8, Amalgam 22–25, Gold 14.4 (×10⁻⁶/°C)",
                    "Metals conduct heat → liner/base required under metal restorations",
                    "Biocompatibility = no harmful local/systemic response",
                    "GIC bonds chemically to tooth via ionic bond with hydroxyapatite calcium",
                    "GIC releases fluoride → cariostatic = preferred in high-caries risk patients",
                    "Galvanism = two dissimilar metals → electrochemical current → pain",
                    "Zinc phosphate cement: initial pH 3.5 (very acidic) → pulp irritation → needs liner",
                    "Metamerism = material matches shade under one light but not another",
                    "Fatigue = material failure under repeated loading BELOW ultimate strength",
                    "Toughness = total energy absorbed before fracture (area under stress-strain curve)",
                  ].map((p, i) => (
                    <li
                      key={i}
                      style={{ fontSize: "0.93rem", marginBottom: 2 }}
                    >
                      <b>{i + 1}.</b> {p}
                    </li>
                  ))}
                </ol>
              </Box>
            </Card>

            <SectionHeader color={accent}>
              📄 10-Mark Answer Format
            </SectionHeader>
            <Card>
              <Box color="#eff6ff" border="#bfdbfe">
                <b>
                  Q: Classify dental materials. Describe ideal properties of a
                  restorative material.
                </b>
                <ol
                  style={{
                    paddingLeft: 20,
                    margin: "10px 0 0 0",
                    lineHeight: 1.9,
                    fontSize: "0.93rem",
                  }}
                >
                  <li>
                    Introduction — importance of material science in dentistry
                    (2-3 lines)
                  </li>
                  <li>
                    Classification — tabular format (by use, composition,
                    location, setting)
                  </li>
                  <li>
                    Ideal Requirements — definition + list with brief
                    explanation of each
                  </li>
                  <li>
                    Mechanical properties — stress, strain, elastic modulus,
                    hardness, creep
                  </li>
                  <li>
                    Physical properties — CTE (with values), thermal
                    conductivity, color
                  </li>
                  <li>Chemical properties — solubility, corrosion, adhesion</li>
                  <li>
                    Biological properties — biocompatibility definition +
                    requirements
                  </li>
                  <li>
                    Conclusion — "No single material fulfills all requirements;
                    selection is a compromise"
                  </li>
                </ol>
              </Box>
            </Card>

            <SectionHeader color={green}>📄 5-Mark Answer Format</SectionHeader>
            <Card>
              <Box color="#f0fdf4" border="#bbf7d0">
                <b>
                  Q: Write a short note on ideal requirements of a restorative
                  dental material.
                </b>
                <ol
                  style={{
                    paddingLeft: 20,
                    margin: "10px 0 0 0",
                    lineHeight: 1.9,
                    fontSize: "0.93rem",
                  }}
                >
                  <li>Definition (1 line)</li>
                  <li>List 8–10 ideal requirements with brief reasons</li>
                  <li>Table: material vs property it best satisfies</li>
                  <li>Concluding statement about compromise</li>
                </ol>
              </Box>
            </Card>

            <SectionHeader color={purple}>
              🧠 All Mnemonics Summary
            </SectionHeader>
            <Card>
              <Mnemonic
                title="DENTAL (Definition)"
                content={
                  <>
                    <b>D</b>iagnosis · <b>E</b>xamine · <b>N</b>eed assessment ·{" "}
                    <b>T</b>reatment · <b>A</b>ppropriate material · <b>L</b>
                    ong-term success
                  </>
                }
              />
              <Mnemonic
                title="SPECS (ADA Specification)"
                content={
                  <>
                    <b>S</b>afety · <b>P</b>erformance · <b>E</b>fficacy ·{" "}
                    <b>C</b>omparison · <b>S</b>tandardized testing
                  </>
                }
              />
              <Mnemonic
                title="CLHD (Classification)"
                content={
                  <>
                    <b>C</b>omposition · <b>L</b>ocation · <b>H</b>ow it sets ·{" "}
                    <b>D</b>ental use/function
                  </>
                }
              />
              <Mnemonic
                title="AMIC BASH (Ideal Requirements)"
                content={
                  <>
                    <b>A</b>esthetics · <b>M</b>echanical strength · <b>I</b>
                    nsolubility · <b>C</b>orrosion resistance · <b>B</b>
                    iocompatibility · <b>A</b>dhesion · <b>S</b>imilar CTE ·{" "}
                    <b>H</b>ardness similar to enamel
                  </>
                }
              />
              <Mnemonic
                title="SEPTEMBER (Mechanical Properties)"
                content={
                  <>
                    <b>S</b>tress · <b>E</b>lastic modulus · <b>P</b>roportional
                    limit · <b>T</b>oughness · <b>E</b>longation · <b>M</b>
                    alleability · <b>B</b>rinell hardness · <b>E</b>lastic limit
                    · <b>R</b>esistance to fatigue
                  </>
                }
              />
            </Card>

            <SectionHeader color={gold}>⚠️ Common Viva Traps</SectionHeader>
            <Card>
              {[
                [
                  "Ductility vs Malleability",
                  "Ductility = tensile (wire); Malleability = compressive (sheet). Don't confuse!",
                ],
                [
                  "Elastic limit vs Proportional limit",
                  "Practically same, but elastic limit is technically slightly higher",
                ],
                [
                  "Toughness vs Hardness",
                  "Toughness = energy to fracture; Hardness = resistance to indentation — totally different!",
                ],
                [
                  "GIC bonding",
                  "GIC bonds CHEMICALLY (ionic bond via polyalkenoic acid to Ca²⁺ in HA) — not just mechanically",
                ],
                [
                  "Fatigue vs Creep",
                  "Fatigue = repeated loading at sub-UTS stress; Creep = constant load over time",
                ],
                [
                  "Biocompatibility definition",
                  "Must include both local AND systemic; many students forget systemic effects",
                ],
                [
                  "CTE numbers",
                  "Know at least: Enamel ~11.4, Amalgam 22–25, Gold ~14.4 — examiners love asking for values",
                ],
              ].map(([trap, clarification], i) => (
                <Box
                  key={i}
                  color="#fffbeb"
                  border="#fde68a"
                  style={{ marginBottom: 6 }}
                >
                  <b style={{ color: red }}>⚠️ TRAP: {trap}</b>
                  <div style={{ fontSize: "0.92rem", marginTop: 3 }}>
                    ✅ {clarification}
                  </div>
                </Box>
              ))}
            </Card>
          </div>
        )}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: 30,
          padding: "12px",
          fontSize: "0.8rem",
          color: "#94a3b8",
        }}
      >
        Philips · Chapter 1 · BDS Dental Materials · High-Yield Notes
      </div>
    </div>
  );
}
