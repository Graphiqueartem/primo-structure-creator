import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContentBlock } from "@/components/layout/ContentBlock";
import { ImagePlaceholder } from "@/components/ui/placeholders";
import { TreePine, Globe, GraduationCap, Trophy } from "lucide-react";

const Impact = () => {
  return (
    <div className="min-h-screen">
      {/* Impact Headline – Full Width */}
      <ContentBlock 
        title="Stories That Spark Real-World Change"
        variant="minimal"
        className="bg-background pt-20"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xl text-muted-foreground leading-relaxed">
            <strong>Every Whimsy Films project is designed with dual impact: to enchant audiences and to make 
            a measurable difference in cultural preservation, wildlife conservation, and education.</strong>
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong>Every nation has stories of animals, spirits, and heroes. These tales connect us to the earth. 
            We transform them into cinematic experiences that children and families everywhere can treasure.</strong>
          </p>
        </div>
      </ContentBlock>

      {/* Impact Pillars – Four Blocks */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-8 max-w-7xl mx-auto">
        
        {/* Conservation Impact */}
        <ContentBlock 
          title="Conservation Impact"
          variant="minimal"
          className="bg-forest-light/10"
        >
          <div className="space-y-4 text-center">
            <TreePine className="w-16 h-16 text-primary mx-auto mb-4" />
            <div className="space-y-3 text-muted-foreground">
              <p className="text-sm leading-relaxed">
                <strong>🐾 Emotional Connection: Children care about what they know. By featuring real animals and ecosystems, we foster empathy and long-term conservation values.</strong>
              </p>
              <p className="text-sm leading-relaxed">
                <strong>🌍 Global Awareness: Our films shine a light on endangered species and fragile habitats that rarely reach mainstream media.</strong>
              </p>
              <p className="text-sm leading-relaxed">
                <strong>📢 Amplification for NGOs & Governments: By embedding conservation messages within stories, our films extend the reach of campaigns and policy initiatives.</strong>
              </p>
              <p className="text-sm leading-relaxed">
                <strong>💡 Soft Power Tool: Wildlife narratives become a unifying diplomatic message — transcending language and borders.</strong>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button variant="magical" size="sm" asChild>
                <Link to="/partnerships">Partner With Us in Conservation</Link>
              </Button>
              <Button variant="warm" size="sm" asChild>
                <Link to="/contact">Learn More About Our Wildlife Projects</Link>
              </Button>
            </div>
          </div>
        </ContentBlock>

        {/* Cultural Impact */}
        <ContentBlock 
          title="Cultural Impact"
          variant="minimal"
          className="bg-gradient-warm/20"
        >
          <div className="space-y-4 text-center">
            <Globe className="w-16 h-16 text-primary mx-auto mb-4" />
            <div className="space-y-3 text-muted-foreground">
              <p className="text-sm leading-relaxed">
                <strong>🌏 Representation: We showcase stories from diverse cultures with authenticity and respect.</strong>
              </p>
              <p className="text-sm leading-relaxed">
                <strong>🎭 Collaboration: Cultural organisations and artists become part of the creative process.</strong>
              </p>
              <p className="text-sm leading-relaxed">
                <strong>🏛️ Cultural Diplomacy: Governments can use co-productions as tools for building international cultural presence.</strong>
              </p>
              <p className="text-sm leading-relaxed">
                <strong>📚 Preservation: Our films act as modern archives of folklore — safeguarding heritage for future generations.</strong>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button variant="magical" size="sm" asChild>
                <Link to="/partnerships">Bring Your Culture's Stories to Life</Link>
              </Button>
              <Button variant="warm" size="sm" asChild>
                <Link to="/contact">Explore Cultural Preservation Projects</Link>
              </Button>
            </div>
          </div>
        </ContentBlock>

        {/* Education & Social Impact */}
        <ContentBlock 
          title="Educational & Social Impact"
          variant="minimal"
          className="bg-forest-light/10"
        >
          <div className="space-y-4 text-center">
            <GraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />
            <div className="space-y-3 text-muted-foreground">
              <p className="text-sm leading-relaxed">
                <strong>📖 Curriculum Alignment: Partnered with educators to design content that supports literacy, empathy, and ecological learning.</strong>
              </p>
              <p className="text-sm leading-relaxed">
                <strong>🧒 Child-Centered Design: Stories empower children as heroes, encouraging self-expression and resilience.</strong>
              </p>
              <p className="text-sm leading-relaxed">
                <strong>🤝 Community Engagement: Schools, libraries, and NGOs can use our films in workshops, festivals, and learning programs.</strong>
              </p>
              <p className="text-sm leading-relaxed">
                <strong>🌟 Inclusive Narratives: Representation of diverse voices ensures children see themselves reflected in the stories they love.</strong>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button variant="magical" size="sm" asChild>
                <Link to="/partnerships">Collaborate on Education Projects</Link>
              </Button>
              <Button variant="warm" size="sm" asChild>
                <Link to="/contact">Request Educational Resources</Link>
              </Button>
            </div>
          </div>
        </ContentBlock>

        {/* Economic & Partnership Impact */}
        <ContentBlock 
          title="Economic & Partnership Impact"
          variant="minimal"
          className="bg-gradient-warm/20"
        >
          <div className="space-y-4 text-center">
            <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
            <div className="space-y-3 text-muted-foreground">
              <p className="text-sm leading-relaxed">
                <strong>💼 Economic Growth: Film production supports local jobs, skills, and industries.</strong>
              </p>
              <p className="text-sm leading-relaxed">
                <strong>🎥 Tourism & Promotion: Stories rooted in real cultures and landscapes attract tourism interest.</strong>
              </p>
              <p className="text-sm leading-relaxed">
                <strong>💡 Innovation Showcase: As pioneers in blending puppetry, AI, and live wildlife, we position partners at the forefront of global creative innovation.</strong>
              </p>
              <p className="text-sm leading-relaxed">
                <strong>🌍 Global Visibility: Governments and institutions gain prestige by being associated with a studio redefining the cultural landscape.</strong>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button variant="magical" size="sm" asChild>
                <Link to="/partnerships">Invest in Cultural & Economic Impact</Link>
              </Button>
              <Button variant="warm" size="sm" asChild>
                <Link to="/partnerships">Join Our Partner Network</Link>
              </Button>
            </div>
          </div>
        </ContentBlock>
      </div>
    </div>
  );
};

export default Impact;