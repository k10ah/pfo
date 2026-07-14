import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const experiences = [
    {
      title: "Summer Intern",
      company: "Indian Institute of Technology, Madras (NIID Lab)",
      location: "Chennai, Tamil Nadu",
      period: "May 2026 - Present",
      description: [
        "I am working with multimodal signals and images including surface EMG, Myotonometry, EEG and Infrared Radiography for various research purposes including neuromuscular study.", "I contributed in the classification of signals using machine learning techniques and image segmentation using deep learning models","I worked with image segmentation of cervical cancer cells (SiPaKMeD dataset) using SAM, MedSAM, U-Net, PRISM. I am also a Co-Author in the respective paper that has been recently accepted by ICMMB-2026, Singapore Conference.",
      ]
    },
    {
      title: "Data science Intern",
      company: "Prediscan - IITMRP Startup",
      location: "Chennai, Tamil Nadu",
      period: "May 2026 - July 2026",
      description: [
        "Developed a multi-label ICD-10 diagnosis prediction pipeline using PubMedBERT, PyTorch, and Hugging Face Transformers to classify clinical notes across 878 ICD codes for healthcare insurance claim processing.",
        "Preprocessed and analyzed 23,792 clinical records, implementing biomedical NLP workflows, confidence scoring, and Top-5 ICD recommendation logic to support efficient medical coding.",
        "Built and evaluated deep learning models using Python, Scikit-learn, Pandas, and NumPy, incorporating techniques such as mixed precision training, early stopping, and model checkpointing to optimize training performance.",
      ]
    }
  ];

  return (
    <section id="experience" className="py-8 relative" style={{
      background: themeColors.background.sections?.experience || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      {/* Subtle gradient overlay for top edge blending */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
            : `linear-gradient(180deg, ${themeColors.colors.pink[25]} 0%, transparent 100%)`,
          zIndex: 1
        }}
      />
      {/* Subtle gradient overlay for bottom edge blending to white divider */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.white} 100%)`,
          zIndex: 1
        }}
      />
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Experience</h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-2 border-pink-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg bg-white/95 dark:bg-gray-800/95">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400] }}>{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-400 mt-1">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2" style={{ color: themeColors.primary }}>•</span>
                      <span className="text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[200] : themeColors.colors.dark[600] }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;